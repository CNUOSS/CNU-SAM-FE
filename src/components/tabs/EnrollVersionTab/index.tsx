// Dependencies
import React, { useState } from 'react';
import { read, utils } from 'xlsx';
import { useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { tabState } from '@recoil/tab';

// Components
import TabTemplate from '@components/templates/TabTemplate';
import InputFile from '@components/widgets/InputFile';
import Input from '@components/widgets/Input';
import DefaultText from '@components/widgets/DefaultText';
import ProjectDetailTab from '../ProjectDetailTab';
import Table, { ItemType } from './Table';

// Hooks
import useForm from '@hooks/useForm';
import useFetch from '@hooks/useFetch';
import useMutation from '@hooks/useMutation';

// Apis
import { getLicenseNamesAPI } from '@apis/data';
import { createVersionAPI } from '@apis/version';
import { getProjectDetailAPI } from '@apis/project';
import { excelType2OSSType } from '@converter/excelResult';
import { getLicenseNamesResponseServer2Client } from '@converter/data';
import { createVersionRequestClient2Server } from '@converter/version';

import * as Style from './styled';
import { CreateVersionRequestClientType } from '@@types/client';
import { compareTabs, deleteTabs } from '@utils/manage-tabs';

interface EnrollVersionTabProps {
  projectName: string;
  projectId: number;
}

export interface ExcelType {
  ID: string;
  'Source Name or Path': string;
  'OSS Name': string;
  'OSS Version': string;
  License: string;
  'Download Location': string;
}

type FormType = Pick<CreateVersionRequestClientType, 'versionName' | 'versionDescription'>;

function EnrollVersionTab({ projectId, projectName }: EnrollVersionTabProps) {
  const [items, setItems] = useState<ItemType[]>([]);
  const queryClient = useQueryClient();
  const setTabState = useSetRecoilState(tabState);
  const { change, getValue, handleSubmit } = useForm<FormType>();
  const createMutationSuccess = async () => {
    await queryClient.invalidateQueries(getProjectDetailAPI.url(projectId));
    setTabState((prev) => {
      const newTabs = compareTabs(prev, `${projectId} . ${projectName}`, <ProjectDetailTab projectId={projectId} />);
      return deleteTabs(newTabs, `${projectId} . ${projectName}: 버전등록`);
    });
  };
  const { mutate: createMutate } = useMutation({
    url: createVersionAPI.url,
    method: createVersionAPI.method,
    onSuccess: createMutationSuccess,
    converter: {
      request: createVersionRequestClient2Server,
    },
  });
  const { data } = useFetch(
    getLicenseNamesAPI,
    {},
    { suspense: false },
    { response: getLicenseNamesResponseServer2Client }
  );
  const licenses = data?.map((license) => license.licenseName) || [];

  const addNewItem = (newItem: ItemType) => setItems((prev) => [newItem, ...prev]);
  const deleteItem = (selectedIndex: number) => setItems((prev) => prev.filter((_, i: number) => i !== selectedIndex));

  const getDependency = (data: string | ArrayBuffer | null) => {
    const workBook = read(data, { type: 'binary' });
    const result = utils
      .sheet_to_json(workBook.Sheets[workBook.SheetNames[0]])
      .map((item) => excelType2OSSType(item as ExcelType));
    setItems((prev) => [...prev, ...result]);
  };
  const onSubmit = (formData: FormType) => {
    const ossList = items.map((item) => ({
      ...item,
      licenseId: data?.find((license) => license.licenseName === item.license)?.id,
    }));
    createMutate({ ...formData, projectId, ossList, dynamicUrl: createVersionAPI.dynamicUrl(projectId) });
  };

  return (
    <TabTemplate description="Description" onCreate={handleSubmit(onSubmit)}>
      <Style.BackGroundBox direction="column">
        <Style.InputWrapper>
          <DefaultText label="프로젝트명">{projectName}</DefaultText>
          <Input label="버전명" width="30rem" value={getValue('versionName')} onChange={change('versionName')} />
        </Style.InputWrapper>
        <Style.DescriptionWrapper>
          <Style.Label>설명</Style.Label>
          <Style.DescriptionInput value={getValue('versionDescription')} onChange={change('versionDescription')} />
        </Style.DescriptionWrapper>
      </Style.BackGroundBox>
      <Style.BackGroundBox direction="row">
        <InputFile label="DEPENDENCY" onChange={getDependency} />
      </Style.BackGroundBox>
      <Style.TableWrapper>
        <Table items={items} licenses={licenses} onAddNewItem={addNewItem} onDeleteItem={deleteItem} />
      </Style.TableWrapper>
    </TabTemplate>
  );
}

export default EnrollVersionTab;
