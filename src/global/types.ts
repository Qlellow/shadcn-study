export type LayoutProps = {
  children: React.ReactNode;
};

export type LinkButtonProps = {
  label: string;
  directionTo: string;
};

export type TableProps = {
  invoices: {
    invoice: string;
    paymentStatus: string;
    paymentMethod: string;
    totalAmount: string;
  }[];
};
