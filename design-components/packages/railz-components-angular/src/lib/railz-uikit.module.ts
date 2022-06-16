import { NgModule } from '@angular/core';

import { defineCustomElements } from '@railzai/railz-uikit/dist/loader';
import { DIRECTIVES } from './stencil-generated';

defineCustomElements(window);
@NgModule({
  declarations: DIRECTIVES,
  imports: [],
  exports: DIRECTIVES,
})
export class RailzUikitModule {}
