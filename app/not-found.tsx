'use client';
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";



const NotFoundPage = () => {
    return <div className="flex flex-col items-center justify-center min-h-screen w-screen">
        <Image
         src="/images/logo.svg"
         alt={`${APP_NAME}`}
         width={48} 
         height={48} 
         priority={true}
         />
         <div
         className="p-6 w-1/3 rounded-lg bg-white shadow-md text-center"
         >
           <h1 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h1>
           <p className="text-destructive">Could not find requested page</p>
           <Button 
            variant='outline'
            className="mt-4 ml-2"
            onClick={() => window.location.href = "/"}>
            <span className="text-gray-800">Go to Home</span>          
           </Button>
              
         </div>
    </div>;
}
 
export default NotFoundPage;