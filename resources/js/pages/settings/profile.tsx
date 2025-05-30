import { type BreadcrumbItem, type SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

import DeleteUser from '@/components/account/delete-user';
import HeadingSmall from '@/components/heading/heading-small';
import InputError from '@/components/input/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/base/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profile settings',
        href: '/settings/profile',
    },
];

type ProfileForm = {
    firstname: string;
    middlename: string;
    lastname: string;
    extension: string;
    email: string;
}

export default function Profile({ mustVerifyEmail, status }: { mustVerifyEmail: boolean; status?: string }) {
    const { auth } = usePage<SharedData>().props;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<Required<ProfileForm>>({
        firstname: auth.user.firstname,
        middlename: auth.user.middlename ?? '',
        lastname: auth.user.lastname,
        extension: auth.user.extension ?? '',
        email: auth.user.email,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Profile has been update")
            }
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Profile settings" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Profile information" description="Update your name and email address" />

                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="firstname">First name</Label>

                            <Input
                                id="firstname"
                                className="mt-1 block w-full"
                                value={data.firstname}
                                onChange={(e) => setData('firstname', e.target.value)}
                                required
                                autoComplete="Firstname"
                                placeholder="First name"
                            />

                            <InputError className="mt-2" message={errors.firstname} />
                        </div>


                        <div className="grid gap-2">
                            <Label htmlFor="middlename">Middle name</Label>

                            <Input
                                id="middlename"
                                className="mt-1 block w-full"
                                value={data.middlename}
                                onChange={(e) => setData('middlename', e.target.value)}
                                // required
                                autoComplete="middlename"
                                placeholder="Middle name"
                            />

                            <InputError className="mt-2" message={errors.middlename} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="lastname">Last name</Label>

                            <Input
                                id="lastname"
                                className="mt-1 block w-full"
                                value={data.lastname}
                                onChange={(e) => setData('lastname', e.target.value)}
                                required
                                autoComplete="lastname"
                                placeholder="Last name"
                            />

                            <InputError className="mt-2" message={errors.lastname} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="extension">Extension</Label>

                            <Input
                                id="extension"
                                className="mt-1 block w-full"
                                value={data.extension}
                                onChange={(e) => setData('extension', e.target.value)}
                                // required
                                autoComplete="extension"
                                placeholder="Extension"
                            />

                            <InputError className="mt-2" message={errors.extension} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email address</Label>

                            <Input
                                id="email"
                                type="email"
                                className="mt-1 block w-full"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                                autoComplete="username"
                                placeholder="Email address"
                            />

                            <InputError className="mt-2" message={errors.email} />
                        </div>

                        {mustVerifyEmail && auth.user.email_verified_at === null && (
                            <div>
                                <p className="text-muted-foreground -mt-4 text-sm">
                                    Your email address is unverified.{' '}
                                    <Link
                                        href={route('verification.send')}
                                        method="post"
                                        as="button"
                                        className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                                    >
                                        Click here to resend the verification email.
                                    </Link>
                                </p>

                                {status === 'verification-link-sent' && (
                                    <div className="mt-2 text-sm font-medium text-green-600">
                                        A new verification link has been sent to your email address.
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="flex items-center gap-4">
                            <Button type='submit' disabled={processing}
                            >
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Save
                            </Button>


                        </div>
                    </form>
                </div>

                <DeleteUser />
            </SettingsLayout>
        </AppLayout>
    );
}
