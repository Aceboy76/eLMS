import { AppContent } from '@/components/content/app-content';
import { AppHeader } from '@/components/header/app-header';
import { AppShell } from '@/components/shell/app-shell';
import { type BreadcrumbItem } from '@/types';
import type { PropsWithChildren } from 'react';

export default function AppHeaderLayout({ children, breadcrumbs }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <AppShell>
            <AppHeader breadcrumbs={breadcrumbs} />
            <AppContent variant='header'>{children}</AppContent>
            {children}
        </AppShell>
    );
}
