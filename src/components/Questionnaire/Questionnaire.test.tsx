import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
    Questionnaire,
    QuestionnaireActions,
    QuestionnaireChoice,
    QuestionnaireChoices,
    QuestionnaireItem,
    QuestionnaireNext,
    QuestionnaireProgress,
    QuestionnaireSubmit,
    QuestionnaireTitle,
} from './Questionnaire';

const items = [
    {
        name: 'topic',
        required: true,
        choices: [{ value: 'a' }, { value: 'b' }],
    },
] as const;

describe('Questionnaire', () => {
    it('renders the active question', () => {
        render(
            <Questionnaire
                items={items}
                onSubmit={(event) => {
                    event.preventDefault();
                }}
            >
                <QuestionnaireProgress />
                <QuestionnaireItem name="topic" required>
                    <QuestionnaireTitle>Pick one</QuestionnaireTitle>
                    <QuestionnaireChoices>
                        <QuestionnaireChoice value="a">A</QuestionnaireChoice>
                        <QuestionnaireChoice value="b">B</QuestionnaireChoice>
                    </QuestionnaireChoices>
                </QuestionnaireItem>
                <QuestionnaireActions>
                    <QuestionnaireNext />
                    <QuestionnaireSubmit />
                </QuestionnaireActions>
            </Questionnaire>,
        );

        expect(screen.getByText('Pick one')).toBeInTheDocument();
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
    });
});
