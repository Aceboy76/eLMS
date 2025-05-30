import AppLayout from "@/layouts/base/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { FormEventHandler } from "react";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AccountInfoForm from "@/components/account/account-info-form";
import EnrollmentInfoForm from "@/components/student/enrollment-info-form";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Student Registration',
        href: '/student/register',
    },
];

interface StudentInfoFormProps {
    FormPurpose: string;

}

export default function StudentInfoForm({ FormPurpose }: StudentInfoFormProps) {

    const { data, setData, post, processing, errors, reset } = useForm({
        //Account
        firstname: '',
        middlename: '',
        lastname: '',
        extension: '',
        email: '',
        password: '',
        password_confirmation: '',

        //Enrollment
        year_level: '',
        admission_date: new Date(),
        student_code: 0,
        student_type: '',
        course_id: 0,
        term_id: 0,
        enrollment_date: new Date(),
        enrollment_status: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('student.register'), {
            // onFinish: () => ,
            onSuccess: () => {
                reset()
                toast.success("Student registered successfully!");
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Student Registration" />

            <Card className="m-10">
                <CardHeader>
                    <CardTitle>{FormPurpose}</CardTitle>
                    <CardDescription>Fill up student information</CardDescription>
                </CardHeader>
                <form onSubmit={submit}>

                    <CardContent className="flex flex-row gap-4">
                        <div className="w-full border-1 rounded-xl border-[var(--color-sidebar-accent) p-6">
                            <AccountInfoForm
                                data={data}
                                setData={setData}
                                processing={processing}
                                errors={errors}
                            />
                        </div>
                        <div className="w-full border-1 border-[var(--color-sidebar-accent)] p-4">

                            <EnrollmentInfoForm
                                data={data}
                                setData={setData}
                                processing={processing}
                                errors={errors}
                            />
                        </div>



                    </CardContent>

                    <CardFooter className="flex justify-end">
                        <Button type="submit" className="mt-4 w-fit" tabIndex={5} disabled={processing}>
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Create account
                        </Button>
                    </CardFooter>
                </form>
            </Card>

        </AppLayout>
    );
}
