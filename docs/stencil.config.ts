import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';
import alias from '@rollup/plugin-alias';
import nodePolyfills from 'rollup-plugin-node-polyfills';



export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://railz-ai.github.io/',
      prerenderConfig: './prerender.config.ts',
      copy: [
        { src: '../../CONTRIBUTING.md', dest: './CONTRIBUTING.md', }
      ]
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/scss/main.scss', 'src/global/scss/sproutkit/_source.scss'],
    }),
    inlineSvg(),
    nodePolyfills(),
  ],
  rollupPlugins: {
    after: [
      // Plugins injected before rollupNodeResolve()
      alias({
        entries: [
          { find: '../../assets', replacement: '../design-components/packages/railz-components/src/assets' },
        ],
      })
    ]
  }
};
