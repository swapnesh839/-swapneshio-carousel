# @swapneshio/carousel

A simple react-based logo/img/card corousal


## Installation

You can install the package using npm, yarn, or pnpm:

```bash
npm install @swapneshio/carousel
```
<button onclick="navigator.clipboard.writeText('npm install @swapneshio/carousel')"></button>

```bash
yarn add @swapneshio/carousel
```
<button onclick="navigator.clipboard.writeText('yarn add @swapneshio/carousel')"></button>

```bash
pnpm add @swapneshio/carousel
```
<button onclick="navigator.clipboard.writeText('pnpm add @swapneshio/carousel')"></button>

## CDN Usage

You can include the `@swapneshio/carousel` package directly from jsDelivr using the following link:

```html
https://cdn.jsdelivr.net/npm/@swapneshio/carousel@latest/dist/index.js
```
OR
```html
<script src="https://cdn.jsdelivr.net/npm/@swapneshio/carousel@latest/dist/index.js"></script>
```


## Usage

Wrap your header or navigation component within the `StickyHeader` component to make it sticky.

```jsx
import React from 'react';
import carousel from '@swapneshio/carousel';
const App = () => {
  const styles = {
    // Your custom styles here
  };

  return (
      <carousel >
        {/* add multiple img/logo/card here */}
        {/* like
         <Card1/>
         <Card2/>
         <Card3/> */}
      </carousel>
  );
};

export default App;
```


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.