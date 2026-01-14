import { ComponentContainer } from '@/components/ComponentWrapper';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export const YAxisCarousel = () => {
  return (
    <ComponentContainer title="Y Axis Carousel" className="py-12">
      <Carousel className="mx-auto w-full sm:max-w-sm" orientation="vertical" opts={{ axis: 'y' }}>
        <CarouselContent className="max-h-68">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 h-48">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </ComponentContainer>
  );
};
