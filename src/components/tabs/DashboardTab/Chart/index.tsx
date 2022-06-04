import useFetch from '@hooks/useFetch';
import React from 'react';
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
import { theme } from '@style/theme';
import * as Style from '../styled';
import { getLectureChartAPI } from '@apis/lecturesw';
import { getLectureChartResponseServer2Client } from '@converter/lecturesw';
import { GetLectureChartResponseClientType } from '@@types/client';

export type ChartType = 'bar' | 'pie';

interface ChartProps {
  year: string;
  chart: ChartType;
}

function Chart({ year, chart }: ChartProps) {
  const COLORS = [theme.colors.primary, theme.colors.secondary, theme.colors.quaternary];
  const { data } = useFetch<GetLectureChartResponseClientType[]>(
    getLectureChartAPI.dynamicUrl(Number(year)),
    {},
    {},
    { response: getLectureChartResponseServer2Client }
  );

  if (!data) return <></>;

  const sortedData = data.sort((a, b) => b.count - a.count);
  const pieChartData = [{ swName: '1개 이하', count: 0 }];
  sortedData.forEach((datum) => {
    if (datum.count > 1) pieChartData.unshift(datum);
    else pieChartData[pieChartData.length - 1].count += 1;
  });
  return (
    <Style.ChartContainer>
      {chart === 'pie' &&
        (data.length ? (
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
        ) : (
          <>정보가 없습니다</>
        ))}
      {chart === 'bar' &&
        (data.length ? (
          <>
            <Style.ChartTitle>소프트웨어 별 사용량</Style.ChartTitle>
            <BarChart width={1220} height={700} data={sortedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="swName" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
              <ReferenceLine y={0} stroke="#000" />
              <Brush dataKey="swName" height={30} stroke="#8884d8" />
              <Bar dataKey="count">
                {sortedData.map((entry, index) => (
                  <Cell fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </>
        ) : (
          <>정보가 없습니다</>
        ))}
    </Style.ChartContainer>
  );
}

export default Chart;
