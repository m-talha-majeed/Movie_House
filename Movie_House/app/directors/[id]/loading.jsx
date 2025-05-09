
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingDirectorDetails() {
  return (
     <div className="container mx-auto py-8 px-4">
       <Skeleton className="h-8 w-32 mb-6" /> {/* Back button skeleton */}
       <Skeleton className="h-10 w-1/3 mb-2" /> {/* Director Name */}
       <Skeleton className="h-5 w-1/4 mb-6" /> {/* Director title */}
       <Skeleton className="h-24 w-full mb-8" /> {/* Biography */}

       <Skeleton className="h-8 w-1/3 mb-6" /> {/* Movies Directed title */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {Array.from({ length: 4 }).map((_, index) => (
           <div key={index} className="flex flex-col space-y-3">
             <Skeleton className="h-[360px] w-full rounded-xl" />
             <div className="space-y-2 p-4">
               <Skeleton className="h-4 w-[150px]" />
               <Skeleton className="h-4 w-[100px]" />
             </div>
           </div>
         ))}
       </div>
     </div>
  );
}
