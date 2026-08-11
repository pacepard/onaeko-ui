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
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
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
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
    email: z.string().email('Enter a valid email'),
});

type Values = z.infer<typeof schema>;

function DemoForm() {
    const form = useForm<Values>({
        resolver: zodResolver(schema),
        defaultValues: { email: '' },
    });

    return (
        <Form {...form}>
            <form
                style={{ display: 'grid', gap: 12 }}
                onSubmit={form.handleSubmit((values) => {
                    toast.success(`Hello ${values.email}`);
                })}
                noValidate
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="you@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit form</Button>
            </form>
        </Form>
    );
}

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
                    <DemoForm />
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
