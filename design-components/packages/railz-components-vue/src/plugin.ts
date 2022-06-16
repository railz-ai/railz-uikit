import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '@railzai/railz-uikit/dist/loader';

export const RailzUikit: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
