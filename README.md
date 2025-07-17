# react-media-query-kit

A lightweight and powerful React hook-based utility for responsive design. Easily detect screen types like mobile, tablet, laptop, desktop, large desktop, and TV without writing manual media queries or complex CSS logic.

## Features

- **Simple hooks for device detection** – Intuitive API for detecting device types
- **Smart breakpoints** – From mobile phones to TVs, including laptops
- **Optional `Media` component** – Declarative conditional rendering support
- **Zero dependencies** – No CSS or manual media queries required
- **Developer-friendly** – Easy to test, extend, and integrate

---

## Installation

```bash
npm install react-media-query-kit
# or
yarn add react-media-query-kit

## Usage

### useMedia() Hook

Detect device type as boolean values for flexible conditional logic:

```javascript

import { useMedia } from 'react-media-query-kit';

const MyComponent = () => {
  const {
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    isLargeDesktop,
    isTV,
  } = useMedia();

  return (
    <div>
      {isMobile && <p>You're on a Mobile device.</p>}
      {isTablet && <p>You're on a Tablet.</p>}
      {isLaptop && <p>You're on a Laptop.</p>}
      {isDesktop && <p>You're on a Desktop.</p>}
      {isLargeDesktop && <p>You're on a Large Desktop.</p>}
      {isTV && <p>You're on a TV screen.</p>}
    </div>
  );
};

```

### useCurrentDevice() Hook

Get the current device type as a string value:

```javascript
import React from 'react';
import { useCurrentDevice } from 'react-media-query-kit';

const DeviceLabel = () => {
  const device = useCurrentDevice();
  // Returns: "mobile", "tablet", "laptop", "desktop", "large-desktop", or "tv"

  return <p>Current device: {device}</p>;
};
```

### Media Component

Conditionally render UI components based on device type:

```javascript
import React from 'react';
import { Media } from 'react-media-query-kit';

const OnlyDesktop = () => (
  <Media device="desktop">
    <p>This is only shown on desktop devices.</p>
  </Media>
);


import { Media } from 'react-media-query-kit';

const OnlyForLaptop = () => (
  <Media device="laptop">
    <p>This content only appears on laptops.</p>
  </Media>
);
```

## Breakpoints

The following breakpoints are used to determine device types:

| Device         | Width Range        |
|----------------|--------------------|
| **Mobile**      | ≤ 480px            |
| **Tablet**      | 481px – 768px      |
| **Laptop**      | 769px – 1024px     |
| **Desktop**     | 1025px – 1440px    |
| **Large Desktop** | 1441px – 1920px   |
| **TV**          | ≥ 1921px           |

## API Reference

### useMedia()

Returns an object with boolean properties for each device type:

```typescript
{
  isMobile: boolean;
  isTablet: boolean;
  isLaptop:boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  isTV: boolean;
}
```

### useCurrentDevice()

Returns the current device type as a string:

```typescript
"mobile" | "tablet" | "laptop" | "desktop" | "large-desktop" | "tv"
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