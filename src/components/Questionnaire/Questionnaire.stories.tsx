import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { toast, Toaster } from '../Toast';
import {
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
} from './Questionnaire';

const items = [
    {
        choices: [{ value: 'tool-calls' }, { value: 'approvals' }, { value: 'handoffs' }],
        name: 'direction',
        required: true,
    },
    {
        choices: [{ value: 'progress' }, { value: 'decisions' }, { value: 'risks' }, { value: 'next-step' }],
        name: 'signals',
    },
    {
        choices: [{ value: 'now' }, { value: 'next-cycle' }, { value: 'backlog' }],
        name: 'timing',
        required: true,
    },
] as const;

const meta = {
    title: 'Components/Questionnaire',
    component: Questionnaire,
    parameters: {
        docs: {
            description: {
                component:
                    'Multi-step questionnaire from shadcn/ui base-nova, powered by @shadcn/react. Supports required items, multi-select, free-text QuestionnaireInput, letter shortcuts, and host-owned submit handling.',
            },
        },
    },
} satisfies Meta<typeof Questionnaire>;

export default meta;
type Story = StoryObj<typeof meta>;

function QuestionnaireDemo({
    previousVariant = 'outline',
    skipVariant = 'outline',
    nextVariant = 'default',
    submitVariant = 'default',
}: {
    previousVariant?: 'outline' | 'ghost' | 'secondary';
    skipVariant?: 'outline' | 'ghost' | 'secondary';
    nextVariant?: 'default' | 'primary' | 'secondary';
    submitVariant?: 'default' | 'primary' | 'secondary';
}) {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const answers = {
            direction: formData.get('direction'),
            signals: formData.getAll('signals'),
            timing: formData.get('timing'),
        };

        toast('Agent plan saved', {
            description: `Direction: ${answers.direction ?? 'None'} · Progress signals: ${answers.signals.join(', ') || 'None'} · Timing: ${answers.timing ?? 'None'}`,
        });
    }

    return (
        <>
            <Toaster />
            <Questionnaire
                className="mx-auto max-w-md"
                defaultItem="direction"
                items={items}
                shortcuts="letters"
                onSubmit={handleSubmit}
            >
                <QuestionnaireProgress />

                <QuestionnaireItem name="direction" required>
                    <QuestionnaireTitle>What should the agent build next?</QuestionnaireTitle>
                    <QuestionnaireDescription>Choose a direction or describe another task.</QuestionnaireDescription>
                    <QuestionnaireChoices>
                        <QuestionnaireChoice value="tool-calls">
                            <span className="font-medium">Tool call timeline</span>
                            <span className="text-muted-foreground">Show what the agent ran and what came back.</span>
                        </QuestionnaireChoice>
                        <QuestionnaireChoice value="approvals">
                            <span className="font-medium">Approval checkpoints</span>
                            <span className="text-muted-foreground">Ask before sensitive or destructive actions.</span>
                        </QuestionnaireChoice>
                        <QuestionnaireChoice value="handoffs">
                            <span className="font-medium">Sub-agent handoffs</span>
                            <span className="text-muted-foreground">
                                Make delegated work and results easier to follow.
                            </span>
                        </QuestionnaireChoice>
                        <QuestionnaireInput
                            aria-label="Another agent feature"
                            placeholder="Describe another feature…"
                        />
                    </QuestionnaireChoices>
                    <QuestionnaireError />
                </QuestionnaireItem>

                <QuestionnaireItem name="signals" multiple>
                    <QuestionnaireTitle>What should every progress update include?</QuestionnaireTitle>
                    <QuestionnaireDescription>Select all that apply, or skip this question.</QuestionnaireDescription>
                    <QuestionnaireChoices>
                        <QuestionnaireChoice value="progress">Progress</QuestionnaireChoice>
                        <QuestionnaireChoice value="decisions">Decisions</QuestionnaireChoice>
                        <QuestionnaireChoice value="risks">Risks</QuestionnaireChoice>
                        <QuestionnaireChoice value="next-step">Next step</QuestionnaireChoice>
                    </QuestionnaireChoices>
                    <QuestionnaireError />
                </QuestionnaireItem>

                <QuestionnaireItem name="timing" required>
                    <QuestionnaireTitle>When should work begin?</QuestionnaireTitle>
                    <QuestionnaireDescription>Choose when the agent should begin the work.</QuestionnaireDescription>
                    <QuestionnaireChoices>
                        <QuestionnaireChoice value="now">Start now</QuestionnaireChoice>
                        <QuestionnaireChoice value="next-cycle">Next development cycle</QuestionnaireChoice>
                        <QuestionnaireChoice value="backlog">Add it to the backlog</QuestionnaireChoice>
                    </QuestionnaireChoices>
                    <QuestionnaireError />
                </QuestionnaireItem>

                <QuestionnaireActions>
                    <QuestionnairePrevious variant={previousVariant} />
                    <QuestionnaireSkip variant={skipVariant} />
                    <QuestionnaireNext variant={nextVariant}>Next</QuestionnaireNext>
                    <QuestionnaireSubmit variant={submitVariant}>Save plan</QuestionnaireSubmit>
                </QuestionnaireActions>
            </Questionnaire>
        </>
    );
}

export const Default: Story = {
    render: () => <QuestionnaireDemo />,
};

export const GhostActions: Story = {
    name: 'Ghost actions',
    render: () => (
        <QuestionnaireDemo previousVariant="ghost" skipVariant="ghost" nextVariant="primary" submitVariant="primary" />
    ),
};

export const SecondaryActions: Story = {
    name: 'Secondary actions',
    render: () => (
        <QuestionnaireDemo
            previousVariant="secondary"
            skipVariant="secondary"
            nextVariant="secondary"
            submitVariant="primary"
        />
    ),
};
