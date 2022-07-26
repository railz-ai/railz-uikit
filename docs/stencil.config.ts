import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';
import alias from '@rollup/plugin-alias';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import fs from 'fs';
import path from "path";

function components() {
  const component = path.join(
    __dirname,
    '../design-components/packages/railz-components/src',
    'components',
  );

  return [
    ...fs
      .readdirSync(component)
      .map((f) => path.join(component, f))
      .map((dir) => {
        try {
          // Get the readme file
          const readmeFound = fs
            .readdirSync(dir)
            .find((item) => item === 'readme.md');
          const file = path.join(dir, readmeFound);

          //Get the directory name
          const dirName = path.basename(dir)


          return { src: file, dest: `./readmes/${dirName}.md` };
        } catch (err) {
          return null;
        }
      })
      .filter((item) => item !== null),
  ];
}


export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://railz-ai.github.io/railz-uikit/',
      prerenderConfig: './prerender.config.ts',
      copy: [
        { src: '../../CONTRIBUTING.md', dest: './CONTRIBUTING.md', },
        ...components()
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
