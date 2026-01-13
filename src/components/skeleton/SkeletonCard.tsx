import { CardContent, CardHeader } from '@/components/ui/card';

import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import ComponentContainer from '@/components/ComponentWrapper/Component';

export const SkeletonCard = () => {
  return (
    <ComponentContainer title="Card">
      <Card className="w-full">
        <CardHeader>
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="aspect-square w-full" />
        </CardContent>
      </Card>
    </ComponentContainer>
  );
};
