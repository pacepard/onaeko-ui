'use client';

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
    Questionnaire,
    QuestionnaireActions,
    QuestionnaireChoice,
    QuestionnaireChoices,
    QuestionnaireDescription,
    QuestionnaireError,
    QuestionnaireInput,
    QuestionnaireItem,
    QuestionnaireNext,
    QuestionnairePrevious,
    QuestionnaireProgress,
    QuestionnaireSkip,
    QuestionnaireSubmit,
    QuestionnaireTitle,
    ResponsiveContainer,
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
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
import { HomeIcon, InboxIcon, SettingsIcon } from '@onaeko/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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

const questionnaireItems = [
    {
        choices: [{ value: 'tool-calls' }, { value: 'approvals' }, { value: 'handoffs' }],
        name: 'direction',
        required: true,
    },
    {
        choices: [{ value: 'progress' }, { value: 'decisions' }, { value: 'risks' }],
        name: 'signals',
    },
] as const;

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

function DemoQuestionnaire() {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        toast('Questionnaire saved', {
            description: `Direction: ${String(formData.get('direction') ?? 'None')}`,
        });
    }

    return (
        <Questionnaire
            className="max-w-md"
            defaultItem="direction"
            items={questionnaireItems}
            shortcuts="letters"
            onSubmit={handleSubmit}
        >
            <QuestionnaireProgress />
            <QuestionnaireItem name="direction" required>
                <QuestionnaireTitle>What should we build next?</QuestionnaireTitle>
                <QuestionnaireDescription>Pick a direction or describe another task.</QuestionnaireDescription>
                <QuestionnaireChoices>
                    <QuestionnaireChoice value="tool-calls">Tool call timeline</QuestionnaireChoice>
                    <QuestionnaireChoice value="approvals">Approval checkpoints</QuestionnaireChoice>
                    <QuestionnaireChoice value="handoffs">Sub-agent handoffs</QuestionnaireChoice>
                    <QuestionnaireInput aria-label="Another feature" placeholder="Describe another feature…" />
                </QuestionnaireChoices>
                <QuestionnaireError />
            </QuestionnaireItem>
            <QuestionnaireItem name="signals" multiple>
                <QuestionnaireTitle>What should progress updates include?</QuestionnaireTitle>
                <QuestionnaireChoices>
                    <QuestionnaireChoice value="progress">Progress</QuestionnaireChoice>
                    <QuestionnaireChoice value="decisions">Decisions</QuestionnaireChoice>
                    <QuestionnaireChoice value="risks">Risks</QuestionnaireChoice>
                </QuestionnaireChoices>
            </QuestionnaireItem>
            <QuestionnaireActions>
                <QuestionnairePrevious />
                <QuestionnaireSkip />
                <QuestionnaireNext />
                <QuestionnaireSubmit>Save</QuestionnaireSubmit>
            </QuestionnaireActions>
        </Questionnaire>
    );
}

export default function HomePage() {
    useEffect(() => {
        initTheme('system');
    }, []);

    return (
        <SidebarProvider>
            <Toaster />
            <Sidebar>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Onaeko</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton isActive>
                                        <HomeIcon />
                                        <span>Home</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <InboxIcon />
                                        <span>Inbox</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <SettingsIcon />
                                        <span>Settings</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                <header className="flex h-14 items-center gap-2 border-b px-4">
                    <SidebarTrigger />
                    <span className="text-sm font-medium">Next.js + @onaeko/ui</span>
                </header>
                <main style={{ padding: 24, display: 'grid', gap: 24 }}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Form & dialog</CardTitle>
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
                            <CardTitle>Questionnaire</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <DemoQuestionnaire />
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
            </SidebarInset>
        </SidebarProvider>
    );
}
