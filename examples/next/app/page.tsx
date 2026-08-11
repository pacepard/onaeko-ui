'use client';

import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Input,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Toaster,
    toast,
    initTheme,
} from '@onaeko/ui';
import { useEffect } from 'react';

export default function HomePage() {
    useEffect(() => {
        initTheme('system');
    }, []);

    return (
        <main style={{ padding: 24, display: 'grid', gap: 24 }}>
            <Toaster />
            <Card>
                <CardHeader>
                    <CardTitle>Next.js + @onaeko/ui</CardTitle>
                </CardHeader>
                <CardContent style={{ display: 'grid', gap: 12 }}>
                    <Input placeholder="Email" />
                    <Button onClick={() => toast.success('Saved')}>Show toast</Button>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="secondary">Open dialog</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>It works</DialogTitle>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </CardContent>
            </Card>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Onaeko</TableCell>
                        <TableCell>Ready</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </main>
    );
}
