// Dependencies
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { tabState } from '@recoil/tab';

// Components
import DropdownContainer from '@components/containers/DropdownContainer';
import TabTemplate from '@components/templates/TabTemplate';
import Dropdown from '@components/widgets/Dropdown';
import TabForm from '@components/widgets/TabForm';
import Button from '@components/widgets/Button';
import Input from '@components/widgets/Input';
import Table, { ItemType } from './Table';

// Apis
import { getDepartmentsAPI, getLectureTypesAPI } from '@apis/data';
import { createLectureSWRequestClient2Server } from '@converter/lecturesw';
import { createLectureSWAPI, deleteLectureSWAPI, getLectureSWListAPI } from '@apis/lecturesw';
import { getDepartmentResponseServer2Client, getLectureTypesResponseServer2Client } from '@converter/data';

// hooks
import useForm from '@hooks/useForm';
import useMutation from '@hooks/useMutation';

import { CreateLectureSWRequestClientType } from '@@types/client';
import { NOT_CHOOSED, SEMESTER, YEARS } from '@common/constants';
import { deleteTabs } from '@utils/manage-tabs';
import { useAuth } from '@libs/auth';
import * as Style from './styled';

interface AddOrUpdateLectureSWTabProps {
  lectureSWId?: number;
}

type FormType = Pick<
  CreateLectureSWRequestClientType,
  'year' | 'semester' | 'lectureName' | 'department' | 'lectureNum' | 'lectureType'
>;

function AddOrUpdateLectureSWTab({ lectureSWId }: AddOrUpdateLectureSWTabProps) {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const setTabState = useSetRecoilState(tabState);
  const [items, setItems] = useState<ItemType[]>([]);
  const { change, getValue, error, handleSubmit } = useForm<FormType>({
    year: [{ error: 'required' }],
    semester: [{ error: 'required' }],
    lectureName: [{ error: 'required' }],
    department: [{ error: 'required' }],
    lectureNum: [{ error: 'required' }],
    lectureType: [{ error: 'required' }],
  });
  const createMutationSuccess = async () => {
    queryClient.invalidateQueries(getLectureSWListAPI);
    setTabState((prev) => deleteTabs(prev, `수업용 SW 등록`));
  };
  const deleteMutationSuccess = async () => {
    queryClient.invalidateQueries(getLectureSWListAPI);
    setTabState((prev) => deleteTabs(prev, `${lectureSWId} . 강의 수정`));
  };
  const { mutate: createMutate } = useMutation({
    url: createLectureSWAPI.url,
    method: createLectureSWAPI.method,
    onSuccess: createMutationSuccess,
    converter: {
      request: createLectureSWRequestClient2Server,
    },
  });
  const { mutate: deleteMutate } = useMutation({
    url: deleteLectureSWAPI.url,
    method: deleteLectureSWAPI.method,
    onSuccess: deleteMutationSuccess,
  });

  const changeDepartment = (department: string) => change('department')(department);
  const changeYear = (yearIdx: number) => change('year')(yearIdx ? YEARS[yearIdx - 1] : '');
  const changeSemester = (semesterIdx: number) => change('semester')(semesterIdx ? SEMESTER[semesterIdx - 1] : '');
  const changeLectureType = (lectureType: string) => change('lectureType')(lectureType);

  const addNewItem = (newItem: ItemType) => setItems((prev) => [newItem, ...prev]);
  const deleteItem = (selectedIndex: number) => setItems((prev) => prev.filter((_, i: number) => i !== selectedIndex));

  const createLectureSW = (data: FormType) => {
    if (!user) return;
    createMutate({ ...data, ownerId: user.id, sw: items });
  };
  const deleteLectureSW = () => {
    if (!lectureSWId || !user) return;
    deleteMutate({ dynamicUrl: deleteLectureSWAPI.dynamicUrl(lectureSWId) });
  };

  return (
    <TabTemplate description="Description">
      <Style.FormTitleWrapper>
        <Style.FormTitle>수업 정보 작성</Style.FormTitle>
        {error && <Style.Error>모든 값을 입력해주십시오</Style.Error>}
        <Style.ButtonWrapper>
          {!lectureSWId && <Button onClick={handleSubmit(createLectureSW)}>등록하기</Button>}
          {lectureSWId && (
            <Button theme="warning" onClick={deleteLectureSW}>
              삭제하기
            </Button>
          )}
          {lectureSWId && <Button onClick={() => {}}>수정하기</Button>}
        </Style.ButtonWrapper>
      </Style.FormTitleWrapper>
      <TabForm>
        <DropdownContainer
          label="조직분류"
          getUrl={getDepartmentsAPI}
          width="16rem"
          onClickItem={changeDepartment}
          responseConverter={getDepartmentResponseServer2Client}
        />
        <Dropdown items={[NOT_CHOOSED, ...YEARS]} label="년도" width="10rem" onClickItem={changeYear} />
        <Dropdown items={[NOT_CHOOSED, ...SEMESTER]} label="학기" width="10rem" onClickItem={changeSemester} />
        <DropdownContainer
          label="이수구분"
          getUrl={getLectureTypesAPI}
          width="13rem"
          onClickItem={changeLectureType}
          responseConverter={getLectureTypesResponseServer2Client}
        />
        <Input value={getValue('lectureName')} label="과목이름" width="30rem" onChange={change('lectureName')} />
        <Input value={getValue('lectureNum')} label="과목번호" width="24rem" onChange={change('lectureNum')} />
      </TabForm>
      <Style.TableWrapper>
        <Table items={items} onAddNewItem={addNewItem} onDeleteItem={deleteItem} />
      </Style.TableWrapper>
    </TabTemplate>
  );
}

export default AddOrUpdateLectureSWTab;
