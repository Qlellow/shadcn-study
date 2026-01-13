import { Table, TableCell } from '../ui/table';
import { TableRow } from '../ui/table';
import { TableHead } from '../ui/table';
import { TableBody } from '../ui/table';
import { TableCaption } from '../ui/table';
import { TableHeader } from '../ui/table';
import ComponentContainer from '@/components/ComponentWrapper/Component';

import type { TableProps } from '@/global/types';

export const BasicTable: React.FC<TableProps> = ({ invoices }) => {
  return (
    <ComponentContainer title="Basic">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.slice(0, 3).map(invoice => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ComponentContainer>
  );
};
