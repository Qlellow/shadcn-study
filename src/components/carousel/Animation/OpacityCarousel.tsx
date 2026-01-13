import { useCallback, useEffect, useRef, useState } from 'react';
import type { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import { ComponentContainer } from '@/components/ComponentWrapper/Component';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import * as I from '@/data';

const TWEEN_FACTOR_BASE = 0.7;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export const OpacityCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const tweenFactor = useRef(0);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === 'scroll';

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach(slideIndex => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach(loopItem => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const opacity = numberWithinRange(tweenValue, 0, 1).toString();
        const slideNode = emblaApi.slideNodes()[slideIndex];
        if (slideNode) {
          slideNode.style.opacity = opacity;
        }
      });
    });
  }, []);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    // 초기값 설정
    onSelect();

    setTweenFactor(api);
    tweenOpacity(api);

    api.on('select', onSelect);
    api.on('reInit', onSelect);
    api
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
      api.off('reInit', setTweenFactor);
      api.off('reInit', tweenOpacity);
      api.off('scroll', tweenOpacity);
      api.off('slideFocus', tweenOpacity);
    };
  }, [api, setTweenFactor, tweenOpacity]);

  return (
    <ComponentContainer title="Opacity Carousel">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {Array.from({ length: 7 }).map((_, index) => (
            <CarouselItem
              key={index}
              className={cn('basis-2/3', current === index && 'is-snapped')}
            >
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
        <CarouselPrevious className="hidden sm:inline-flex" />
        <CarouselNext className="hidden sm:inline-flex" />
      </Carousel>
    </ComponentContainer>
  );
};
