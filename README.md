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

pass multiple jsx/img/card as a child to the `Carousel` component to make it work.

```jsx
import React from 'react';
import Carousel from '@swapneshio/carousel';
const App = () => {
  const styles = {
    // Your custom styles here
  };

  return (
      <Carousel >
        {/* add multiple img/logo/card here */}
        {/* like
         <Card1/>
         <Card2/>
         <Card3/> */}
      </Carousel>
  );
};

export default App;
```


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.