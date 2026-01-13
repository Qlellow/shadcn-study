import AutoScroll from 'embla-carousel-auto-scroll';

import { ComponentContainer } from '@/components/ComponentWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

export const AutoScrollCarousel = () => {
  return (
    <ComponentContainer title="Auto Scroll Carousel">
      <Carousel
        className="mx-auto max-w-xs sm:max-w-sm"
        opts={{ loop: true, dragFree: true }}
        plugins={[AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-auto">
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
      </Carousel>
    </ComponentContainer>
  );
};
