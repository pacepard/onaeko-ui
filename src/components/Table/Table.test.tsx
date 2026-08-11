import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from './Table';

describe('Table', () => {
    it('renders headers and cells', () => {
        render(
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Role</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Ada</TableCell>
                        <TableCell>Admin</TableCell>
                    </TableRow>
                </TableBody>
            </Table>,
        );

        expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument();
        expect(screen.getByRole('columnheader', { name: 'Role' })).toBeInTheDocument();
        expect(screen.getByRole('cell', { name: 'Ada' })).toBeInTheDocument();
        expect(screen.getByRole('cell', { name: 'Admin' })).toBeInTheDocument();
    });
});
