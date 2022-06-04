import React, { useState } from 'react';
import TabTemplate from '@components/templates/TabTemplate';
import TabForm from '@components/widgets/TabForm';
import Dropdown from '@components/widgets/Dropdown';
import { YEARS } from '@common/constants';
import ToggleSwitch, { ToggleDirection } from '@components/widgets/ToggleSwitch';
import useForm from '@hooks/useForm';
import Chart, { ChartType } from './Chart';
import * as Style from './styled';
import AsyncBoundaryWrapper from '@components/containers/AsyncBoundaryWrapper';

interface FormType {
  year: string;
}

function DashboardTab() {
  const { change, getValue } = useForm<FormType>({}, { year: YEARS[0] });
  const [chart, setChart] = useState<ChartType>('bar');

  const changeYears = (yearIdx: number) => change('year')(YEARS[yearIdx]);

  const toggleSwitch = (direction: ToggleDirection) => setChart(direction === 'left' ? 'bar' : 'pie');
  return (
    <TabTemplate description="">
      <TabForm onSubmit={() => {}}>
        <Style.FormContainer>
          <Dropdown label="연도" items={YEARS} onClickItem={changeYears} />
          <ToggleSwitch leftText="막대 그래프" rightText="원형 그래프" toggleSwitch={toggleSwitch} />
        </Style.FormContainer>
      </TabForm>
      <AsyncBoundaryWrapper>
        <Chart chart={chart} year={getValue('year')} />
      </AsyncBoundaryWrapper>
    </TabTemplate>
  );
}

export default DashboardTab;
