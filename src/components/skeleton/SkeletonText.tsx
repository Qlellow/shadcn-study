import { Skeleton } from '@/components/ui/skeleton';
import { SkeletonExample } from '@/components/skeleton/Skeleton';

const SkeletonText = () => {
  return (
    <SkeletonExample title="Text">
      <div className="flex w-full flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </SkeletonExample>
  );
};

export default SkeletonText;
