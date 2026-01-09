import { SkeletonWrapper } from '@/components/skeleton/Skeleton';
import SkeletonAvatar from '@/components/skeleton/SkeletonAvatar';
import SkeletonForm from '@/components/skeleton/SkeletonForm';
import SkeletonText from '@/components/skeleton/SkeletonText';
import SkeletonCard from '@/components/skeleton/SkeletonCard';
import SkeletonTable from '@/components/skeleton/SkeletonTable';
import ComponentsLayout from '@/pages/components/layout';

const SkeletonPage = () => {
  return (
    <ComponentsLayout>
      <SkeletonWrapper>
        <SkeletonAvatar />
        <SkeletonCard />
        <SkeletonText />
        <SkeletonForm />
        <SkeletonTable />
      </SkeletonWrapper>
    </ComponentsLayout>
  );
};

export default SkeletonPage;
