import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 즉시 스크롤
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // 다음 프레임에서도 확인 (레이아웃 변경 후 스크롤이 다시 발생할 수 있음)
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);

    // document의 스크롤도 확인
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
