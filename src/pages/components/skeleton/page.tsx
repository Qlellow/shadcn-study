import SkeletonAvatar from '@/components/skeleton/SkeletonAvatar';
import SkeletonForm from '@/components/skeleton/SkeletonForm';
import SkeletonText from '@/components/skeleton/SkeletonText';
import SkeletonCard from '@/components/skeleton/SkeletonCard';
import SkeletonTable from '@/components/skeleton/SkeletonTable';
import ComponentsLayout from '@/pages/components/layout';
import ComponentWrapper from '@/components/ComponentWrapper/ComponentWrapper';

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
