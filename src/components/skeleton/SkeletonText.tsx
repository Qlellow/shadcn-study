import { Skeleton } from '@/components/ui/skeleton';
import ComponentContainer from '@/components/ComponentWrapper/Component';

const SkeletonText = () => {
  return (
    <ComponentContainer title="Text">
      <div className="flex w-full flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </ComponentContainer>
  );
};

export default SkeletonText;
