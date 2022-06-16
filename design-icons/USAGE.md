## Usage

### Using the icon

#### React Usage

```typescript jsx
import React, { useEffect, useState } from 'react';
import { RailzDownloadIcon } from '@railzai/railz-icons-react';

function App() {
  return (
    <div className="App">
      <RailzDownloadIcon variant="solid" />
    </div>
  );
}

export default App;
```

#### Angular Usage

##### app.component.html

```html
<railz-download-icon variant="solid"></railz-download-icon>
```

##### app.module.ts

Import the `RailzIconsModule` into your component module or app.module.ts file

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RailzIconsModule } from '@railzai/railz-icons-angular';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RailzIconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

#### Vue Usage

##### App.vue

```html
<railz-download-icon variant="solid"></railz-download-icon>
```

##### app.module.ts

Import the `RailzIconsModule` into your component module or app.module.ts file

```typescript
import { createApp } from 'vue';
import { RailzIconsModule } from '@railzai/railz-icons-vue';

import App from './App.vue';
createApp(App).use(RailzIconsModule).mount('#app');
```

### Using the icon property

#### React Usage

```typescript jsx
import React, { useEffect, useState } from 'react';
import { RailzButton } from '@railzai/railz-uikit-react';

function App() {
  return (
    <div className="App">
      <RailzButton icon="download" />
    </div>
  );
}

export default App;
```

#### Angular Usage

##### app.component.html

```html
<railz-button icon="download"></railz-button>
```

##### app.module.ts

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

#### Vue Usage

##### App.vue

```html
<railz-button icon="download"></railz-button>
```

##### app.module.ts

Import the `RailzUikitModule` into your component module or app.module.ts file

```typescript
import { createApp } from 'vue';
import { RailzUikit } from '@railzai/railz-uikit-vue';

import App from './App.vue';
createApp(App).use(RailzUikit).mount('#app');
```
