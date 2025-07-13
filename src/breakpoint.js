export const BREAKPOINTS = {
  mobile: 0,
  tablet: 768,
  desktop: 1025,
  largeDesktop: 1441,
  tv: 1921,
};

export const getDevice = (width) => {
  if (width < BREAKPOINTS.tablet) return 'mobile';
  if (width < BREAKPOINTS.desktop) return 'tablet';
  if (width < BREAKPOINTS.largeDesktop) return 'desktop';
  if (width < BREAKPOINTS.tv) return 'largeDesktop';
  return 'tv';
};
