import {
    Bar,
    BarChart,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CartesianGrid,
    ChartTooltip,
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
    ResponsiveContainer,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Toaster,
    XAxis,
    YAxis,
    toast,
    initTheme,
} from '@onaeko/ui';
import '@onaeko/ui/styles.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

initTheme('system');

const schema = z.object({
    email: z.string().email('Enter a valid email'),
});

type Values = z.infer<typeof schema>;

const chartData = [
    { name: 'Mon', value: 12 },
    { name: 'Tue', value: 18 },
    { name: 'Wed', value: 9 },
    { name: 'Thu', value: 22 },
    { name: 'Fri', value: 15 },
];

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

export function App() {
    return (
        <main style={{ padding: 24, display: 'grid', gap: 24 }}>
            <Toaster />
            <Card>
                <CardHeader>
                    <CardTitle>Vite + @onaeko/ui</CardTitle>
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
            <Card>
                <CardHeader>
                    <CardTitle>Chart</CardTitle>
                </CardHeader>
                <CardContent style={{ height: 240 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <ChartTooltip />
                            <Bar dataKey="value" fill="var(--onaeko-primary)" />
                        </BarChart>
                    </ResponsiveContainer>
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
