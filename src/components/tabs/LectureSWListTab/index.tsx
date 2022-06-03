// Dependencies
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { tabState } from '@recoil/tab';

// Components
import Input from '@components/widgets/Input';
import TabForm from '@components/widgets/TabForm';
import Dropdown from '@components/widgets/Dropdown';
import TabTemplate from '@components/templates/TabTemplate';
import DropdownContainer from '@components/containers/DropdownContainer';
import AsyncBoundaryWrapper from '@components/containers/AsyncBoundaryWrapper';
import AddOrUpdateLectureSWTab from '@components/tabs//AddOrUpdateLectureSWTab';
import AddOrUpdateRegistrationSWModal from '@components/modals/AddOrUpdateRegistrationSWModal';
import Table, { SearchInfoType } from './Table';

// Apis
import { getDepartmentsAPI, getLectureTypesAPI } from '@apis/data';
import { getDepartmentResponseServer2Client, getLectureTypesResponseServer2Client } from '@converter/data';

import useForm from '@hooks/useForm';
import { compareTabs } from '@utils/manage-tabs';
import { NOT_CHOOSED, SEMESTER, YEARS } from '@common/constants';
import * as Style from './styled';
import { useAuth } from '@libs/auth';
import { SummarizedRegistrationSWType } from '@@types/client';
import { lectureSW2RegistrationSW } from '@converter/lecturesw';

function LectureSWListTab() {
  const { user } = useAuth();
  const { change, getValue, getAllValue } = useForm<SearchInfoType>();
  const [selectedItem, setSelectedItem] = useState<SummarizedRegistrationSWType>();
  const setTabState = useSetRecoilState(tabState);
  const [infoStore, setInfoStore] = useState<SearchInfoType>({
    department: '',
    year: '',
    semester: '',
    lectureType: '',
    lectureName: '',
    lectureNum: '',
    owner: '',
  });

  const clickItemAddButton = (item: any) => () => {
    const registrationSW = lectureSW2RegistrationSW(item);
    setSelectedItem(registrationSW);
  };
  const clickItem = (item: any) => {
    if (user && item.ownerId === user.id) {
      setTabState((oldState) =>
        compareTabs(oldState, `${item.id} . 강의 수정`, <AddOrUpdateLectureSWTab lectureSWId={item.id} />)
      );
    }
  };

  const closeModal = () => setSelectedItem(undefined);
  const changeDepartment = (department: string) => change('department')(department);
  const changeYear = (yearIdx: number) => change('year')(yearIdx ? YEARS[yearIdx - 1] : '');
  const changeSemester = (semesterIdx: number) => change('semester')(semesterIdx ? SEMESTER[semesterIdx - 1] : '');
  const changeLectureType = (lectureType: string) => change('lectureType')(lectureType);
  const handleSearch = () => setInfoStore((store) => ({ ...store, ...getAllValue() }));

  return (
    <>
      {selectedItem && <AddOrUpdateRegistrationSWModal registrationSW={selectedItem as any} closeModal={closeModal} />}
      <TabTemplate description="Description">
        <TabForm onSubmit={handleSearch} buttonText="조회하기">
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
          <Input value={getValue('lectureName')} label="과목이름" width="20rem" onChange={change('lectureName')} />
          <Input value={getValue('lectureNum')} label="과목번호" width="14rem" onChange={change('lectureNum')} />
          <Input value={getValue('owner')} label="등록자" width="14rem" onChange={change('owner')} />
        </TabForm>
        <AsyncBoundaryWrapper>
          <Style.TableWrapper>
            <Table searchInfo={infoStore} clickItem={clickItem} clickItemAddButton={clickItemAddButton} />
          </Style.TableWrapper>
        </AsyncBoundaryWrapper>
      </TabTemplate>
    </>
  );
}

export default LectureSWListTab;
