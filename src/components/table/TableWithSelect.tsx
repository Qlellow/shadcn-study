import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TableExample } from './Table';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const TableWithSelect = () => {
  return (
    <TableExample title="With Select">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Task</TableHead>
            <TableHead>Assignee</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Design homepage</TableCell>
            <TableCell>
              <Select defaultValue="sarah">
                <SelectTrigger className="w-40" size="sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="sarah">Sarah Chen</SelectItem>
                    <SelectItem value="marcus">Marc Rodriguez</SelectItem>
                    <SelectItem value="emily">Emily Watson</SelectItem>
                    <SelectItem value="david">David Kim</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>In Progress</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Implement API</TableCell>
            <TableCell>
              <Select defaultValue="marcus">
                <SelectTrigger className="w-40" size="sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="sarah">Sarah Chen</SelectItem>
                    <SelectItem value="marcus">Marc Rodriguez</SelectItem>
                    <SelectItem value="emily">Emily Watson</SelectItem>
                    <SelectItem value="david">David Kim</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>Pending</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Write tests</TableCell>
            <TableCell>
              <Select defaultValue="emily">
                <SelectTrigger className="w-40" size="sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="sarah">Sarah Chen</SelectItem>
                    <SelectItem value="marcus">Marc Rodriguez</SelectItem>
                    <SelectItem value="emily">Emily Watson</SelectItem>
                    <SelectItem value="david">David Kim</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>Not Started</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableExample>
  );
};

export default TableWithSelect;
