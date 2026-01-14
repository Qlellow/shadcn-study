/* eslint-disable react-hooks/rules-of-hooks */
import { useIsMobile } from '@/hooks/use-mobile';
import * as U from './util';

// prettier-ignore
export const picsumUrl = (width: number, height:number): string =>
  `https://picsum.photos/${width}/${height}`;

export const randomImage = (w: number = 1000, h: number = 800, delta: number = 200): string => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return picsumUrl(U.random(h, h + delta), U.random(w, w + delta));
  }
  return picsumUrl(U.random(w, w + delta), U.random(h, h + delta));
};

export const randomAvatar = () => {
  const size = U.random(200, 400);
  return picsumUrl(size, size);
};
