import { useState } from 'react';
import { ComponentContainer } from '@/components/ComponentWrapper';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

export const VariableWidthCarousel = () => {
  // 각 카드의 랜덤 너비를 생성 (컴포넌트 마운트 시 한 번만 생성)
  const [cardWidths] = useState(() => {
    return Array.from({ length: 5 }).map(() => {
      // 200px ~ 400px 사이의 랜덤 너비
      return Math.floor(Math.random() * 200) + 200;
    });
  });

  return (
    <ComponentContainer title="Variable Width Carousel">
      <Carousel className="mx-auto max-w-xs sm:max-w-sm">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-auto"
              style={{ width: `${cardWidths[index]}px` }}
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6 h-48">
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
