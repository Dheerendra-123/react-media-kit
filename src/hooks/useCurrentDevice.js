import { useState, useEffect } from 'react';
import { getDevice } from '../breakpoint';

export const useCurrentDevice = () => {
  const [device, setDevice] = useState(getDevice(window.innerWidth));

  useEffect(() => {
    const onResize = () => setDevice(getDevice(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return device;
};
