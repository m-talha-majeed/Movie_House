import { Skeleton } from "@/components/ui/skeleton";

 export default function LoadingGenres() {
   return (
     <div className="container mx-auto py-8 px-4">
       <Skeleton className="h-9 w-36 mb-8" />
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {Array.from({ length: 5 }).map((_, index) => (
           <Skeleton key={index} className="h-24 w-full rounded-lg" />
         ))}
       </div>
     </div>
   );
 }
