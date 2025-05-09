import { Skeleton } from "@/components/ui/skeleton";

 export default function LoadingMovies() {
   return (
     <div className="container mx-auto py-8 px-4">
       <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
         <Skeleton className="h-9 w-48" />
         <Skeleton className="h-10 w-full sm:w-48" />
       </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {Array.from({ length: 12 }).map((_, index) => (
           <div key={index} className="flex flex-col space-y-3 border rounded-lg p-4">
             {/* Removed image skeleton */}
             <Skeleton className="h-6 w-3/4" /> {/* Title skeleton */}
             <Skeleton className="h-4 w-full" /> {/* Description skeleton */}
             <Skeleton className="h-4 w-1/2" /> {/* Description skeleton */}
             <div className="flex justify-between pt-2">
                <Skeleton className="h-5 w-16" /> {/* Rating skeleton */}
                <Skeleton className="h-5 w-12" /> {/* Year skeleton */}
             </div>
           </div>
         ))}
       </div>
     </div>
   );
 }
