import Fade from 'embla-carousel-fade';

import { ComponentContainer } from '@/components/ComponentWrapper/Component';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import * as I from '@/data';

export const FadeCarousel = () => {
  return (
    <ComponentContainer title="Fade Carousel" className="items-center">
      <Carousel plugins={[Fade()]} className="w-2/3">
        <CarouselContent>
          {Array.from({ length: 7 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="w-full p-0 overflow-hidden">
                  <CardContent className="w-full h-64 p-0">
                    <img
                      src={I.randomImage(1500, 700)}
                      alt={`Image ${index + 1}`}
                      className="w-full object-cover"
                    />
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
