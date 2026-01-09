import ComponentContainer from '@/components/ComponentWrapper/Compnent';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonTable = () => {
  return (
    <ComponentContainer title="Table">
      <div className="flex w-full flex-col gap-2">
        <div className="flex gap-4">
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </ComponentContainer>
  );
};

export default SkeletonTable;
