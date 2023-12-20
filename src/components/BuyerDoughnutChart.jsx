import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';

const pieParams = { height: 200, margin: { right: 5 } };
// const palette = ['red', 'blue', 'green'];

export default function BuyerDoughnutChart() {
  return (
    <Stack direction="row" width="100%" textAlign="center" spacing={2}>
      <Box flexGrow={1} >
        {/* <Typography>Item</Typography> */}
        <PieChart
          series={[
            { data: [{ label: 'Shopping', value: 30000, color: 'orange' }, { label: 'Expenses', value: 20000 }],
            innerRadius: 40,
            outerRadius: 80,},
          ]}
          {...pieParams}
          slotProps={{
            legend: {
              hidden: true,
              direction: 'column',
              position: { vertical: 'bottom', horizontal: 'middle' },
              padding: { top: 0, bottom: 0, left: 0, right: 0},
            },
          }}
        />
      </Box>
    </Stack>
  );
}
