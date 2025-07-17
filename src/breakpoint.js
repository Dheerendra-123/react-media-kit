export const BREAKPOINTS = {
  mobile: 0,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
  largeDesktop: 1920,
  tv: 2560,
};

export const getDevice = (width) => {
  if (typeof width !== 'number' || width < 0) return 'mobile';
  if (width < BREAKPOINTS.tablet) return 'mobile';
  if (width < BREAKPOINTS.laptop) return 'tablet';
  if (width < BREAKPOINTS.desktop) return 'laptop';
  if (width < BREAKPOINTS.largeDesktop) return 'desktop';
  if (width < BREAKPOINTS.tv) return 'largeDesktop';
  return 'tv';
};