import Autoplay from 'embla-carousel-autoplay';

import { ComponentContainer } from '@/components/ComponentWrapper';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export const AutoPlayCarousel = () => {
  return (
    <ComponentContainer title="Auto Play Carousel">
      <Carousel
        className="mx-auto max-w-xs sm:max-w-sm"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
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
        <CarouselPrevious className="hidden sm:inline-flex" />
        <CarouselNext className="hidden sm:inline-flex" />
      </Carousel>
    </ComponentContainer>
  );
};
