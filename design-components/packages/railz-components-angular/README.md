# Railz UIKit Angular

<p>
  <a href="https://www.npmjs.com/package/@railzai/railz-uikit"><img src="https://img.shields.io/npm/v/@railzai/railz-uikit-angular" alt="Latest Version on NPM"/></a>
  <img src="https://badgen.net/bundlephobia/dependency-count/@railzai/railz-uikit-angular" alt="Tree shaking"/>
</p>

This is an angular wrapper for `@railzai/railz-visualization`.

## Installation

With NPM:

```bash
npm install @railzai/railz-uikit-angular
```

With Yarn:

```bash
yarn add @railzai/railz-uikit-angular
```

## Usage

In your own Angular Application, add the below in your code files

### app.component.html

```html
<railz-component first="Sade" last="Adu"></railz-component>
```

### app.module.ts

Import the `RailzUikitModule` into your component module or app.module.ts file

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RailzUikitModule } from '@railzai/railz-uikit-angular';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RailzUikitModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
