import {
  SkeletonAvatar,
  SkeletonCard,
  SkeletonText,
  SkeletonForm,
  SkeletonTable,
} from '@/components/skeleton';
import ComponentsLayout from '@/pages/components/layout';
import { ComponentWrapper } from '@/components/ComponentWrapper';

const SkeletonPage = () => {
  return (
    <ComponentsLayout>
      <ComponentWrapper>
        <SkeletonAvatar />
        <SkeletonCard />
        <SkeletonText />
        <SkeletonForm />
        <SkeletonTable />
      </ComponentWrapper>
    </ComponentsLayout>
  );
};

export default SkeletonPage;
