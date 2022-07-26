const fs = require('fs-extra');
const glob = require('glob-promise');
const path = require('path');

const { parse, stringify } = require('svgson');
pretty = require('pretty');

// first, get a list of all of your icons in the source folder
glob('./src/assets/icons/**/**/*.svg')
  // next, read their files, using svgson to parse
  .then(filePaths =>
    Promise.all(
      filePaths.map(fileName => {
        return new Promise(resolve => {
          fs.readFile(fileName, 'utf-8').then(svg => {
            parse(svg).then(json => {
              const svg = JSON.stringify(json);
              resolve({ file: fileName, svg });
            });
          });
        });
      }),
    ),
  )

  // write a JSON file inside your component's asset folder for each icon
  .then(files => {
    let iconList = [];

    files.forEach(svg => {
      let file = path.basename(svg.file);
      let svgObject = JSON.parse(svg.svg);

      let paths = svgObject.children
        .filter(child => child.name === 'path' || child.name === 'polygon')
        .map(child => {
          if (child.attributes.points) {
            console.log('child.attributes.points', child.attributes.points);
            const points = `"${child.attributes.points}"`;
            const formatted = points.replace(/(["'])([\.\d- ]+?)(["'])/g, '$1M$2z$3');
            console.log('points', points);
            console.log('formatted', formatted);
            return formatted.replace(/^"(.+(?="$))"$/, '$1');
          }
          return child.attributes.d;
        });

      let filename = `./src/assets/icons/${file}.json`;

      let data = JSON.stringify(paths[0]);

      let iconData = {
        name: file.replace('.svg', ''),
      };

      iconList.push(iconData);

      fs.writeFileSync(filename, data, 'utf8');
    });

    const iconListData = { icons: iconList };

    fs.writeFileSync('./src/assets/icons/index.json', JSON.stringify(iconListData, null, 2), 'utf8');

    process.exit(0);
  });
