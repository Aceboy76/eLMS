import InputError from '@/components/input/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


type UserInfoFormProps = {
    data: {
        firstname: string;
        middlename: string;
        lastname: string;
        extension: string;
        email: string;
        password: string;
        password_confirmation: string;
    };
    setData: (field: string, value: any) => void;
    errors: Record<string, string>;
    processing: boolean;
};

export default function AccountInfoForm({ data, setData, errors, processing }: UserInfoFormProps) {
    return (<div className="flex flex-col gap-6">
        <div className="grid gap-6">
            <div className="grid gap-2">
                <Label htmlFor="firstname">First name</Label>
                <Input
                    id="firstname"
                    type="text"
                    // required
                    // autoFocus
                    tabIndex={1}
                    autoComplete="firstname"
                    value={data.firstname}
                    onChange={(e) => setData('firstname', e.target.value)}
                    disabled={processing}
                    placeholder="First name"
                />
                <InputError message={errors.firstname} className="mt-2" />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="middlename">Middle name</Label>
                <Input
                    id="middlename"
                    type="text"
                    // required
                    autoFocus
                    tabIndex={1}
                    autoComplete="middlename"
                    value={data.middlename}
                    onChange={(e) => setData('middlename', e.target.value)}
                    disabled={processing}
                    placeholder="Middle name"
                />
                <InputError message={errors.middlename} className="mt-2" />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="lastname">Last name</Label>
                <Input
                    id="lastname"
                    type="text"
                    // required
                    tabIndex={1}
                    autoComplete="lastname"
                    value={data.lastname}
                    onChange={(e) => setData('lastname', e.target.value)}
                    disabled={processing}
                    placeholder="Last name"
                />
                <InputError message={errors.lastname} className="mt-2" />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="extension">Extensions</Label>
                <Input
                    id="extension"
                    type="text"
                    // required
                    tabIndex={1}
                    autoComplete="extension"
                    value={data.extension}
                    onChange={(e) => setData('extension', e.target.value)}
                    disabled={processing}
                    placeholder="Extension"
                />
                <InputError message={errors.extension} className="mt-2" />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                    id="email"
                    // type="email"
                    // required
                    tabIndex={2}
                    autoComplete="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    disabled={processing}
                    placeholder="email@example.com"
                />
                <InputError message={errors.email} />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    // required
                    tabIndex={3}
                    autoComplete="new-password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    disabled={processing}
                    placeholder="Password"
                />
                <InputError message={errors.password} />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="password_confirmation">Confirm password</Label>
                <Input
                    id="password_confirmation"
                    type="password"
                    // required
                    tabIndex={4}
                    autoComplete="new-password"
                    value={data.password_confirmation}
                    onChange={(e) => setData('password_confirmation', e.target.value)}
                    disabled={processing}
                    placeholder="Confirm password"
                />
                <InputError message={errors.password_confirmation} />
            </div>


        </div>

    </div>);

}
