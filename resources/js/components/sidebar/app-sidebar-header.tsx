import { Breadcrumbs } from '@/components/breadcrumb/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { NavUser } from '@/components/sidebar/nav-user';

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    return (
        <header className="border-sidebar-border/50 flex h-16 shrink-0 items-center gap-2 border-b px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
                <div className="flex w-full justify-between">

                    <div className='flex items-center gap-2'>
                        <SidebarTrigger className="-ml-1" />
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </div>

                    <div>
                        <NavUser />
                    </div>

                </div>

        </header>
    );
}
