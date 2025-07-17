import { useState, useEffect, useCallback } from 'react';
import { getDevice } from '../breakpoint';

export const useMedia = () => {
  const [device, setDevice] = useState(() => {
    if (typeof window !== 'undefined') {
      return getDevice(window.innerWidth);
    }
    return 'desktop';
  });

  const handleResize = useCallback(() => {
    setDevice(getDevice(window.innerWidth));
  }, []);

  useEffect(() => {
    setDevice(getDevice(window.innerWidth));
    
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };
    
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [handleResize]);

  return {
    device,
    isMobile: device === 'mobile',
    isTablet: device === 'tablet',
    isLaptop:device==='laptop',
    isDesktop: device === 'desktop',
    isLargeDesktop: device === 'largeDesktop',
    isTV: device === 'tv',
  };
};