import ComponentsLayout from '@/pages/components/layout';
import SonnerTypes from '@/components/SonnerTypes';

const SonnerPage = () => {
  return (
    <ComponentsLayout>
      <div className="flex flex-col gap-8 justify-center w-full h-full">
        <SonnerTypes />
      </div>
    </ComponentsLayout>
  );
};

export default SonnerPage;
