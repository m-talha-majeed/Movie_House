import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingMovieDetails() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Adjusted Skeleton for layout without image */}
      <Skeleton className="h-10 w-3/4 mb-4" />
      <Skeleton className="h-5 w-1/2 mb-6" />
      <Skeleton className="h-24 w-full mb-4" />
       <div className="flex gap-2 mb-4">
         <Skeleton className="h-6 w-16" />
         <Skeleton className="h-6 w-16" />
       </div>
       <Skeleton className="h-6 w-24 mb-4" />
       <Skeleton className="h-6 w-20 mb-4" />
       <Skeleton className="h-10 w-32" />
    </div>
  );
}
