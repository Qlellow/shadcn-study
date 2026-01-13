import { Skeleton } from '@/components/ui/skeleton';
import { ComponentContainer } from '@/components/ComponentWrapper';

export const SkeletonAvatar = () => {
  return (
    <ComponentContainer title="Avatar">
      <div className="flex w-full items-center gap-4">
        <Skeleton className="size-10 shrink-0 rounded-full" />
        <div className="grid gap-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    </ComponentContainer>
  );
};
