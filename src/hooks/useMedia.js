import { useState, useEffect } from 'react';
import { getDevice } from '../breakpoints';

export const useMedia = () => {
  const [device, setDevice] = useState(getDevice(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDevice(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: device === 'mobile',
    isTablet: device === 'tablet',
    isDesktop: device === 'desktop',
    isLargeDesktop: device === 'largeDesktop',
    isTV: device === 'tv',
  };
};
