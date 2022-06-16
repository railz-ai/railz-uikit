### Railz UIKit Usage

#### React Usage

```typescript jsx
import React, {useEffect, useState} from 'react';
import {RailzComponent} from "@railzai/railz-uikit-react";

function App() {
  return (
    <div className="App">
      <RailzComponent first="Sade" last="Adu"/>
    </div>
  );
}

export default App;
```


#### Angular Usage

##### app.component.html

```html
<railz-component first="Sade" last="Adu"></railz-component>
```

##### app.module.ts

Import the `RailzUikitModule` into your component module or app.module.ts file

```typescript
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; 
import {RailzUikitModule} from "@railzai/railz-uikit-angular"; 
@NgModule({ 
    declarations: [AppComponent], 
    imports: [BrowserModule, RailzUikitModule], 
    providers: [], 
    bootstrap: [AppComponent], 
}) 
export class AppModule {}
```


#### Vue Usage

##### App.vue

```html
<railz-component first="Sade" last="Adu"></railz-component>
```

##### main.js

Import the `RailzUikit` into your main file

```typescript
import { createApp } from 'vue'
import { RailzUikit } from '@railzai/railz-uikit-vue';

import App from './App.vue'
createApp(App).use(RailzUikit).mount('#app')
```
