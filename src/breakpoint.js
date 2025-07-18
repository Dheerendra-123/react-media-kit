export const DEVICE_RANGES = {
  mobile: { min: 0, max: 480 },
  tablet: { min: 481, max: 768 },
  laptop: { min: 769, max: 1024 },
  desktop: { min: 1025, max: 1440 },
  largeDesktop: { min: 1441, max: 1920 },
  tv: { min: 1921, max: Infinity },
};

export const getDevice = (width) => {
  if (typeof width !== 'number' || width < 0) return 'mobile';
  if (width <= DEVICE_RANGES.mobile.max) return 'mobile';
  if (width <= DEVICE_RANGES.tablet.max) return 'tablet';
  if (width <= DEVICE_RANGES.laptop.max) return 'laptop';
  if (width <= DEVICE_RANGES.desktop.max) return 'desktop';
  if (width <= DEVICE_RANGES.largeDesktop.max) return 'largeDesktop';
  return 'tv';
}