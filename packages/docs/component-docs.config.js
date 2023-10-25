// const path = require('path');
// const fs = require('fs');
// const doctrine = require('doctrine');

// // import * from '../../railz-uikit/docs/pages'
// function pages() {
//   const pages = path.join(__dirname, '../../railz-uikit/docs/pages');
//   const component = path.join(__dirname, '../../railz-uikit/design-components/packages/railz-components/src', 'components');

//   return [
//     ...fs
//       .readdirSync(pages)
//       .map(f => path.join(pages, f))
//       .map(file => ({ type: file.endsWith('mdx') ? 'mdx' : 'md', file })),
//     { type: 'separator' },
//     ...fs
//       .readdirSync(component)
//       .map(f => path.join(component, f))
//       .map(dir => {
//         // Get the typescript file
//         const typescriptFileFound = fs.readdirSync(dir).find(item => item.endsWith('.tsx'));
//         const typescriptFile = path.join(dir, typescriptFileFound);
//         try {
//           const data = fs.readFileSync(typescriptFile, 'utf8');
//           const finalContent = doctrine.parse(data, { unwrap: true });

//           // Get the assigned group of file
//           const group = (finalContent.tags || []).find(tag => tag.title === 'group')?.description;

//           // Get the readme file
//           const readmeFound = fs
//             .readdirSync(dir)
//             // .find((item) => item !== 'readme.md' && item.endsWith('.md'));
//             .find(item => item.endsWith('.md'));
//           const file = path.join(dir, readmeFound);
//           console.log('file', file);
//           return { type: 'md', file, group };
//         } catch (err) {
//           return null;
//         }
//       })
//       .filter(item => item !== null),
//   ];
// }

// console.log('pages', pages());

// fs.writeFileSync('./src/docs/pages.json', JSON.stringify(pages(), null, 2), 'utf8');

// process.exit(0);

// // const assets = path.join(__dirname, 'assets');
// // const output = path.join(__dirname, 'dist');
// // const root = path.join(__dirname, '..');

// // module.exports = {
// //   port: 1234,
// //   root,
// //   title: '[title] · Railz UI Kit',
// //   output,
// //   pages,
// //   colors: {
// //     primary: '#00884F',
// //     secondary: '#006037',
// //   },
// //   github: 'https://github.com/railz-ai/railz-uikit',
// //   assets: [path.join(assets, 'images'), path.join(assets, 'scripts')],
// //   styles: [path.join(assets, 'styles.css')],
// //   scripts: [path.join(assets, 'scripts', 'mermaid.min.js'), path.join(assets, 'scripts', 'mermaid-initialize.js')],
// //   logo: 'images/railz-logo.svg',
// //   favicon: 'images/railz-icon.png',
// // };
