import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { ShieldAlert } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Forbidden() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-[var(--color-sidebar)]">
                <Card className=" flex items-center ">
                    <CardHeader className=" items-center">
                        <CardTitle className="text-3xl">403</CardTitle>
                        <CardDescription>Forbidden</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ShieldAlert className="w-24 h-24" />
                    </CardContent>
                    <CardFooter className="flex flex-col">

                        <p>You don’t have permission to access this page.</p>
                        <Link href={route('home')}>
                            <Button variant={"link"}>Go to Home</Button>
                        </Link>
                    </CardFooter>
                </Card>

            </div>
        </>
    )
}
//             <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md w-full">
//                 <div className="flex justify-center mb-4 text-red-500">
//
//                 </div>
//                 <h1 className="text-4xl font-bold mb-2 text-gray-800"></h1>
//                 <h2 className="text-xl font-semibold mb-4 text-gray-600">
//
//                 </h2>
//                 <p className="text-gray-500 mb-6">
//
//                 </p>
//
//             </div>
