import ComponentsLayout from '@/pages/components/layout';
import { ComponentWrapper } from '@/components/ComponentWrapper';
import {
  BasicCarousel,
  LoopCarousel,
  DragFreeCarousel,
  VariableWidthCarousel,
  YAxisCarousel,
  AutoPlayCarousel,
  AutoScrollCarousel,
  FadeCarousel,
  OpacityCarousel,
  ScaleCarousel,
  ParallaxCarousel,
  ClassNameCarousel,
} from '@/components/carousel';

const CarouselPage = () => {
  return (
    <ComponentsLayout>
      <div className="flex flex-col gap-8 w-full">
        <ComponentWrapper title="Basic Example">
          <BasicCarousel />
          <LoopCarousel />
          <DragFreeCarousel />
          <VariableWidthCarousel />
          <YAxisCarousel />
        </ComponentWrapper>

        <ComponentWrapper title="Auto Example">
          <AutoPlayCarousel />
          <AutoScrollCarousel />
        </ComponentWrapper>

        <ComponentWrapper title="Animation Example" className="md:grid-cols-1">
          <FadeCarousel />
          <ClassNameCarousel />
          <ParallaxCarousel />
          <ScaleCarousel />
          <OpacityCarousel />
        </ComponentWrapper>
      </div>
    </ComponentsLayout>
  );
};

export default CarouselPage;
