'use client';

import { toast } from 'sonner';
import { Button } from './ui/button';

const SuccessToast = () => {
    return (
        <Button onClick={() => toast.success('My First Toast!', {
            action: {
                label: 'Dismiss',
                onClick: () => toast.dismiss(),
            },
            important: true,
            description: 'Description message'
        })}>
            Register
        </Button>
    );
};

export default SuccessToast;