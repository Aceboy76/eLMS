import { useAppearance } from '@/hooks/use-appearance';
import AuthSimpleLayout from '@/layouts/auth/auth-simple-layout';
import { Toaster } from 'sonner';

const AuthLayout = ({ children, title, description, ...props }: { children: React.ReactNode; title: string; description: string }) => {
    const { appearance } = useAppearance()

    return (
        <AuthSimpleLayout title={title} description={description} {...props}>
            {children}
            <Toaster theme={appearance} />

        </AuthSimpleLayout>
    );
}

export default AuthLayout
