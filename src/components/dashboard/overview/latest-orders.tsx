import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import type { SxProps } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import dayjs from 'dayjs';

const statusMap = {
  خوذة: { label: 'خوذة', color: 'primary' },
  قناع: { label: 'قناع', color: 'success' },
  سترة: { label: 'سترة', color: 'warning' },
} as const;

export interface Order {
  id: string;
  amount: number;
  status: 'خوذة' | 'قناع' | 'سترة';
  createdAt: Date;
}

export interface LatestOrdersProps {
  orders?: Order[];
  sx?: SxProps;
}

export function LatestOrders({ orders = [], sx }: LatestOrdersProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardHeader title="اخر المخالفات" />
      <Divider />
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell>رقم الكاميرا</TableCell>
              <TableCell sortDirection="desc">التاريخ</TableCell>
              <TableCell>الوقت</TableCell> {/* Added Time column */}
              <TableCell>نوع المخالفة</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => {
              const { label, color } = statusMap[order.status] ?? { label: 'Unknown', color: 'default' };

              return (
                <TableRow hover key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{dayjs(order.createdAt).format('MMM D, YYYY')}</TableCell>
                  <TableCell>{dayjs(order.createdAt).format('h:mm A')}</TableCell>
                  <TableCell>
                    <Chip color={color} label={label} size="small" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
}
