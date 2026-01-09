import { Skeleton } from '@/components/ui/skeleton';
import { SkeletonExample } from '@/components/skeleton/Skeleton';

const SkeletonAvatar = () => {
  return (
    <SkeletonExample title="Avatar">
      <div className="flex w-full items-center gap-4">
        <Skeleton className="size-10 shrink-0 rounded-full" />
        <div className="grid gap-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    </SkeletonExample>
  );
};

export default SkeletonAvatar;
