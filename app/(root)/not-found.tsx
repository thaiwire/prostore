'use client';
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";


const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Image src="/images/logo.svg" alt="404" width={48} height={48}
            priority={true}
            />
            <h1 className="text-4xl font-bold mt-4">404 Not Found</h1>
        </div>
    );
};
export default NotFoundPage;