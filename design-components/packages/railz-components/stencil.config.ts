import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  namespace: 'railz-uikit',
  enableCache: false,
  autoprefixCss: 'railz',
  preamble: 'Built with Stencil\nCopyright (c) Railz Financial Technologies.',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: `@railzai/railz-uikit`,
      directivesProxyFile: `../railz-components-angular/src/lib/stencil-generated/components.ts`,
      directivesArrayFile: `../railz-components-angular/src/lib/stencil-generated/index.ts`,
    }),
    reactOutputTarget({
      componentCorePackage: '@railzai/railz-uikit',
      proxiesFile: '../railz-components-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: false,
      includeImportCustomElements: true,
      loaderDir: 'dist/loader',
    }),
    vueOutputTarget({
      componentCorePackage: '@railzai/railz-uikit',
      proxiesFile: '../railz-components-vue/src/stencil-generated/components.ts',
    }),
    {
      type: 'dist',
    },
    {
      type: 'dist-custom-elements',
      autoDefineCustomElements: true,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['../../../design-tokens/packages/railz-tokens/scss/ui-kit/_index.scss'],
    }),
    inlineSvg(),
  ],
};
