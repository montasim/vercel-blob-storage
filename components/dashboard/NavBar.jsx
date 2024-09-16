import React from 'react';

import { Card } from '@/components/ui/card';

import { ColorToggle } from '@/components/theme/ColorToggle';
import { ModeToggle } from '@/components/theme/ModeToggle';
import { HiCollection } from 'react-icons/hi';

export default function NavBar() {
    return (
        <Card className="flex items-center justify-between px-4 py-2  bg-card text-card-foreground border-b border-x-0 border-t-0 rounded-none space-x-4">
            <div className="flex items-center justify-between space-x-4">
                <HiCollection className="text-2xl" />

                <strong className="font-roboto uppercase font-semibold">
                    File Management Dashboard
                </strong>
            </div>

            <div className="flex items-center justify-between space-x-4">
                <ColorToggle />

                <ModeToggle />
            </div>
        </Card>
    );
}
