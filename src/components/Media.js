import React from 'react';
import { useMedia } from '../hooks/useMedia';

const Media = ({ children, ...props }) => {
  const media = useMedia();

  for (const key of Object.keys(props)) {
    if (media[`is${key[0].toUpperCase() + key.slice(1)}`]) {
      return <>{children}</>;
    }
  }

  return null;
};

export default Media;
