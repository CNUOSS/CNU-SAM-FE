import React, { useState } from 'react';
import {
  ReferenceLine,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Brush,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import TabTemplate from '@components/templates/TabTemplate';
import TabForm from '@components/widgets/TabForm';
import Dropdown from '@components/widgets/Dropdown';
import { YEARS } from '@common/constants';
import ToggleSwitch, { ToggleDirection } from '@components/widgets/ToggleSwitch';
import useForm from '@hooks/useForm';
import { theme } from '../../../style/theme';
import * as Style from './styled';

interface FormType {
  year: string;
}

const dummy = [
  { swName: 'aaa', count: 10 },
  { swName: 'bbb', count: 5 },
  { swName: 'ccc', count: 8 },
  { swName: 'ddd', count: 6 },
  { swName: 'eee', count: 6 },
  { swName: 'fff', count: 6 },
  { swName: 'ggg', count: 1 },
  { swName: 'hhh', count: 1 },
  { swName: 'iii', count: 1 },
];

function DashboardTab() {
  const { change } = useForm<FormType>();
  const [chart, setChart] = useState<'bar' | 'pie'>('bar');

  const changeYears = (yearIdx: number) => change('year')(YEARS[yearIdx - 1]);
  const COLORS = [theme.colors.primary, theme.colors.secondary, theme.colors.quaternary];

  const data = dummy.sort((a, b) => b.count - a.count);
  const pieChartData = [{ swName: '1개 이하', count: 0 }];
  data.forEach((data) => {
    if (data.count > 1) pieChartData.unshift(data);
    else pieChartData[pieChartData.length - 1].count += 1;
  });

  const toggleSwitch = (direction: ToggleDirection) => setChart(direction === 'left' ? 'bar' : 'pie');
  return (
    <TabTemplate description="">
      <TabForm onSubmit={() => {}}>
        <Style.FormContainer>
          <Dropdown label="연도" items={YEARS} onClickItem={changeYears} />
          <ToggleSwitch leftText="막대 그래프" rightText="원형 그래프" toggleSwitch={toggleSwitch} />
        </Style.FormContainer>
      </TabForm>
      <Style.ChartContainer>
        {chart === 'pie' && (
          <>
            <Style.ChartTitle>소프트웨어 사용비율</Style.ChartTitle>
            <PieChart width={1220} height={700}>
              <Pie
                data={pieChartData}
                dataKey="count"
                nameKey="swName"
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={200}
                label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = 25 + innerRadius + (outerRadius - innerRadius);
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text x={x} y={y} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                      {pieChartData[index].swName} ({value})
                    </text>
                  );
                }}
              >
                {pieChartData.map((entry, index) => (
                  <Cell fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </>
        )}
        {chart === 'bar' && (
          <>
            <Style.ChartTitle>소프트웨어 별 사용량</Style.ChartTitle>
            <BarChart width={1220} height={700} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="swName" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
              <ReferenceLine y={0} stroke="#000" />
              <Brush dataKey="swName" height={30} stroke="#8884d8" />
              <Bar dataKey="count">
                {data.map((entry, index) => (
                  <Cell fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </>
        )}
      </Style.ChartContainer>
    </TabTemplate>
  );
}

export default DashboardTab;
