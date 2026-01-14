import ClassName from 'embla-carousel-class-names';

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

export const ClassNameCarousel = () => {
  return (
    <ComponentContainer title="ClassName Carousel">
      <Carousel plugins={[ClassName({ snapped: 'is-snapped' })]}>
        <CarouselContent>
          {Array.from({ length: 7 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-2/3 not-[.is-snapped]:opacity-[0.16] has-[.is-snapped]:opacity-100 transition-opacity duration-500 ease-in-out"
            >
              <div className="p-1">
                <Card className="w-full p-0 overflow-hidden">
                  <CardContent className="w-full h-64 p-0">
                    <img
                      src={I.randomImage(1500, 800)}
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
