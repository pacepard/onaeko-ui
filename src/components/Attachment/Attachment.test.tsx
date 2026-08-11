import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
    Attachment,
    AttachmentContent,
    AttachmentTitle,
} from './Attachment';

describe('Attachment', () => {
    it('renders title and state', () => {
        render(
            <Attachment state="done">
                <AttachmentContent>
                    <AttachmentTitle>notes.txt</AttachmentTitle>
                </AttachmentContent>
            </Attachment>,
        );

        expect(screen.getByText('notes.txt')).toBeInTheDocument();
        expect(screen.getByText('notes.txt').closest('[data-slot=attachment]')).toHaveAttribute(
            'data-state',
            'done',
        );
    });
});
