import ComponentsLayout from '@/pages/components/layout';
import ComponentWrapper from '@/components/ComponentWrapper/ComponentWrapper';
import {
  BasicTable,
  TableWithFooter,
  SimpleTable,
  TableWithBadges,
  TableWithActions,
  TableWithSelect,
  TableWithInput,
  DataTable,
} from '@/components/table';

// invoices 데이터를 컴포넌트 외부로 이동하여 재생성 방지
const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];

const TablePage = () => {
  return (
    <ComponentsLayout>
      <ComponentWrapper>
        <BasicTable invoices={invoices} />
        <TableWithFooter invoices={invoices} />
        <SimpleTable />
        <TableWithBadges />
        <TableWithActions />
        <TableWithSelect />
        <TableWithInput />
        <DataTable />
      </ComponentWrapper>
    </ComponentsLayout>
  );
};

export default TablePage;
