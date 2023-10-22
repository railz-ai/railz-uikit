/* eslint-disable max-len */
import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  namespace: 'railz-uikit',
  enableCache: true,
  autoprefixCss: 'railz',
  preamble:
    "Railz is the Accounting Data as a Service™ solution that makes sense of your business customers' financial data.\nBuilt with Stencil\nCopyright (c) Railz Financial Technologies.",
  buildEs5: 'prod',
  extras: {
    dynamicImportShim: true,
  },
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@railzai/railz-uikit',
      proxiesFile: '../railz-components-react/src/components/index.ts',
      includeDefineCustomElements: false,
      includeImportCustomElements: true,
      includePolyfills: false,
      loaderDir: 'dist/loader',
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
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['../railz-tokens/scss/reset.scss', '../railz-tokens/scss/ui-kit/_index.scss'],
    }),
    inlineSvg(),
  ],
};
