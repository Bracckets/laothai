import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';

import { config } from '@/config';
import { Budget } from '@/components/dashboard/overview/budget';
import { LatestOrders } from '@/components/dashboard/overview/latest-orders';
import { LatestProducts } from '@/components/dashboard/overview/latest-products';
import { Sales } from '@/components/dashboard/overview/sales';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import { TotalCustomers } from '@/components/dashboard/overview/total-customers';
import { TotalProfit } from '@/components/dashboard/overview/total-profit';
import { Traffic } from '@/components/dashboard/overview/traffic';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={4}>
      <Grid lg={3} sm={6} xs={12}>
        <Budget diff={12} trend="up" sx={{ height: '100%' }} value="119" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TotalCustomers diff={16} trend="down" sx={{ height: '100%' }} value="59" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TasksProgress diff={5} trend="up" sx={{ height: '100%' }} value="120" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TotalProfit diff={10} trend="down" sx={{ height: '100%' }} value="120" />
      </Grid>
      <Grid lg={8} xs={12}>
        <Sales
          chartSeries={[
            { name: 'هذا الاسبوع', data: [18, 16, 5, 8, 3, 14, 14] }
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <Traffic chartSeries={[63, 15, 22]} labels={['قناع', 'خوذة', 'سترة']} sx={{ height: '100%' }} />
      </Grid>
      <Grid lg={20} md={12} xs={12}>
        <LatestOrders
          orders={[
            {
              id: 'ID-01',
              amount: 30.5,
              status: 'خوذة',
              createdAt: dayjs().subtract(13, 'minutes').toDate(),
            },
            {
              id: 'ID-01',
              amount: 25.1,
              status: 'قناع',
              createdAt: dayjs().subtract(50, 'minutes').toDate(),
            },
            {
              id: 'ID-01',
              amount: 10.99,
              status: 'سترة',
              createdAt: dayjs().subtract(233, 'minutes').toDate(),
            },
            {
              id: 'ID-01',
              amount: 96.43,
              status: 'خوذة',
              createdAt: dayjs().subtract(600, 'minutes').toDate(),
            },
            {
              id: 'ID-01',
              amount: 32.54,
              status: 'قناع',
              createdAt: dayjs().subtract(1625, 'minutes').toDate(),
            },
            {
              id: 'ID-01',
              amount: 16.76,
              status: 'قناع',
              createdAt: dayjs().subtract(2343, 'minutes').toDate(),
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
    </Grid>
  );
}
