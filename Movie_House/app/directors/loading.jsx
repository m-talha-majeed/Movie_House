
import { Skeleton } from "@/components/ui/skeleton";

 export default function LoadingDirectorsList() {
   return (
     <div className="container mx-auto py-8 px-4">
       <Skeleton className="h-9 w-36 mb-8" /> {/* Title Skeleton */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-40 w-full rounded-lg" />
         ))}
       </div>
     </div>
   );
 }
