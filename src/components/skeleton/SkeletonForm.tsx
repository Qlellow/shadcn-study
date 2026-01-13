import { Skeleton } from '@/components/ui/skeleton';
import ComponentContainer from '@/components/ComponentWrapper/Component';

export const SkeletonForm = () => {
  return (
    <ComponentContainer title="Form">
      <div className="flex w-full flex-col gap-7">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full" />
        </div>
        <Skeleton className="h-9 w-24" />
      </div>
    </ComponentContainer>
  );
};
