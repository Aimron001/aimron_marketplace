import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      label: 'Expenditure in Ksh',
    },
  ],
  width: 400,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-25px, 0)'
    },
  },
};
const dataset = [
  {
    shopping: 5900,
    expenses: 5700,
    month: 'Jan',
  },
  {
    shopping: 5000,
    expenses: 5200,
    month: 'Feb',
  },
  {
    shopping: 4700,
    expenses: 5300,
    month: 'Mar',
  },
  {
    shopping: 5400,
    expenses: 5600,
    month: 'Apr',
  },
  {
    shopping: 5700,
    expenses: 6900,
    month: 'May',
  },
  {
    shopping: 6000,
    expenses: 6300,
    month: 'June',
  },
  {
    shopping: 5900,
    expenses: 6000,
    month: 'July',
  },
  {
    shopping: 6500,
    expenses: 6000,
    month: 'Aug',
  },
  {
    shopping: 5100,
    expenses: 5100,
    month: 'Sept',
  },
  {
    shopping: 6000,
    expenses: 6500,
    month: 'Oct',
  },
  {
    shopping: 6700,
    expenses: 6400,
    month: 'Nov',
  },
  {
    shopping: 6100,
    expenses: 7000,
    month: 'Dec',
  },
];

const valueFormatter = (value) => `Ksh.${value}`;

export default function AnnualExpenditureChart() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'shopping', stack: "expenditure", label: 'Shopping', valueFormatter },
        { dataKey: 'expenses', stack: "expenditure", label: 'Expenses', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}