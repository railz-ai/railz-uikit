/* eslint-disable max-len */
import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  namespace: 'railz-uikit',
  enableCache: true,
  autoprefixCss: 'railz',
  preamble: 'Built with Stencil\nCopyright (c) Railz Financial Technologies.',
  buildEs5: 'prod',
  extras: {
    dynamicImportShim: true,
  },
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: `@railzai/railz-uikit`,
      directivesProxyFile: `../railz-components-angular/src/lib/stencil-generated/components.ts`,
      directivesArrayFile: `../railz-components-angular/src/lib/stencil-generated/index.ts`,
    }),
    reactOutputTarget({
      componentCorePackage: '@railzai/railz-uikit',
      proxiesFile: '../railz-components-react/src/components/index.ts',
      includeImportCustomElements: true,
      includePolyfills: false,

      includeDefineCustomElements: true,
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
      dir: 'components',
      copy: [
        {
          src: '../scripts/custom-elements',
          dest: 'components',
          warn: true,
        },
      ],
      includeGlobalScripts: false,
    },
    {
      type: 'docs-readme',
      strict: true,
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['../../../design-tokens/packages/railz-tokens/scss/reset.scss', '../../../design-tokens/packages/railz-tokens/scss/ui-kit/_index.scss'],
    }),
    inlineSvg(),
  ],
};
