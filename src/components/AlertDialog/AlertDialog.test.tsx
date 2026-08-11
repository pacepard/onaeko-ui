import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Button } from '../Button';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from './AlertDialog';

describe('AlertDialog', () => {
    it('opens and shows title when triggered', async () => {
        const user = userEvent.setup();

        render(
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button>Delete project</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>,
        );

        expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
        await user.click(screen.getByRole('button', { name: 'Delete project' }));
        expect(screen.getByRole('alertdialog')).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Are you sure?' })).toBeInTheDocument();
    });
});
