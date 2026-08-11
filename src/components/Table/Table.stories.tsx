import type { Meta, StoryObj } from '@storybook/react-vite';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from './Table';

const meta = {
    title: 'Components/Table',
    component: Table,
    parameters: {
        docs: {
            description: {
                component:
                    'Semantic table primitives (`Table`, `TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell`) for tabular data. Use when relationships are truly row-and-column data users need to scan or sort. Do not use tables purely for visual grid layout-use Grid instead. Use header cells and captions for complex datasets so assistive tech can interpret structure.',
            },
        },
    },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Table>
            <TableCaption>A list of recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>INV002</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>INV003</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell className="text-right">$350.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    ),
};

export const Compact: Story = {
    render: () => (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Ada Lovelace</TableCell>
                    <TableCell>Engineer</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Grace Hopper</TableCell>
                    <TableCell>Scientist</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    ),
};
