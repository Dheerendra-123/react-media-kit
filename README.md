# react-advanced-media

A lightweight and powerful React hook-based utility for responsive design. Easily detect screen types like mobile, tablet, desktop, large desktop, and TV without writing manual media queries or complex CSS logic.

## Features

- **Simple hooks for device detection** - Intuitive API for detecting device types
- **Smart breakpoints** - Comprehensive coverage from Mobile to TV screens
- **Optional Media component** - Declarative conditional rendering support
- **Zero dependencies** - No CSS or media queries required
- **Developer friendly** - Easy to test and extend

## Installation

```bash
npm install react-advanced-media
```

```bash
yarn add react-advanced-media
```

## Usage

### useMedia() Hook

Detect device type as boolean values for flexible conditional logic:

```javascript
import React from 'react';
import { useMedia } from 'react-advanced-media';

const MyComponent = () => {
  const { isMobile, isTablet, isDesktop, isLargeDesktop, isTV } = useMedia();

  return (
    <div>
      {isMobile && <p>You are on a Mobile device.</p>}
      {isTablet && <p>You are on a Tablet.</p>}
      {isDesktop && <p>Standard Desktop detected.</p>}
      {isLargeDesktop && <p>You're on a Large Desktop.</p>}
      {isTV && <p>This is a TV screen.</p>}
    </div>
  );
};
```

### useCurrentDevice() Hook

Get the current device type as a string value:

```javascript
import React from 'react';
import { useCurrentDevice } from 'react-advanced-media';

const DeviceLabel = () => {
  const device = useCurrentDevice();
  // Returns: "mobile", "tablet", "desktop", "large-desktop", or "tv"

  return <p>Current device: {device}</p>;
};
```

### Media Component

Conditionally render UI components based on device type:

```javascript
import React from 'react';
import { Media } from 'react-advanced-media';

const OnlyDesktop = () => (
  <Media device="desktop">
    <p>This is only shown on desktop devices.</p>
  </Media>
);
```

## Breakpoints

The following breakpoints are used to determine device types:

| Device | Width Range |
|--------|-------------|
| Mobile | ≤ 480px |
| Tablet | 481px – 768px |
| Desktop | 769px – 1200px |
| Large Desktop | 1201px – 1600px |
| TV | ≥ 1601px |

## API Reference

### useMedia()

Returns an object with boolean properties for each device type:

```typescript
{
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  isTV: boolean;
}
```

### useCurrentDevice()

Returns the current device type as a string:

```typescript
"mobile" | "tablet" | "desktop" | "large-desktop" | "tv"
```

### Media Component

**Props:**
- `device`: The target device type for conditional rendering
- `children`: React nodes to render when the device matches

## License

MIT © Dheerendra Vikram Dixit

## Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

## Support

If you encounter any issues or have questions, please file an issue on our GitHub repository.