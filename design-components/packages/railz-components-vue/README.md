# Railz UIKit Vue

<p>
  <a href="https://www.npmjs.com/package/@railzai/railz-uikit"><img src="https://img.shields.io/npm/v/@railzai/railz-uikit-vue" alt="Latest Version on NPM"/></a>
  <img src="https://badgen.net/bundlephobia/dependency-count/@railzai/railz-uikit-vue" alt="Tree shaking"/>
</p>

This is an angular wrapper for `@railzai/railz-visualization`.

## Installation

With NPM:

```bash
npm install @railzai/railz-uikit-vue
```

With Yarn:

```bash
yarn add @railzai/railz-uikit-vue
```

## Usage

##### App.vue

```html
<railz-component first="Sade" last="Adu"></railz-component>
```

##### main.ts

Import the `RailzUikitModule` into your component module or app.module.ts file

```typescript
import { createApp } from 'vue'
import { RailzUikit } from '@railzai/railz-uikit-vue';

import App from './App.vue'
createApp(App).use(RailzUikit).mount('#app')
```
