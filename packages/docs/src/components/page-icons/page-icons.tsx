import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-icons',
  styleUrl: 'page-icons.scss',
  shadow: true,
})
export class PageIcons {
  render() {
    return (
      <div class="container">
        <div class="header">
          <h1>Icons</h1>
        </div>

        <div class="content">
          <section>
            <h2>Icon component</h2>
            <p>
              <strong>The railz-icon component </strong> is a simple component that takes and icon name and an optional size prop.
            </p>
            <pre>
              <code>
                {`<railz-icon icon="home" />
<railz-icon icon="home" size="medium />`}
              </code>
            </pre>
            <p>
              This will return an inline SVG component and the <code>fill</code> color of the icon will be inherited by the <code>color</code>attribute of the parent element.
            </p>
            <p>
              If you pass the component an icon name it doesn't recognize, make sure the <strong>SVG</strong> file is in <code>src/assets/icons</code> and has been added to the
              Icon Library by followin the instructions below.
            </p>
          </section>
        </div>

        <div class="sample">
          <section>
            <h2>Icon Library</h2>
            <icon-library-list />
            <h2>Generating the Icon Library</h2>
            <p>
              The icon library is built by scanning the project folder for any <strong>SVG</strong> files, then capturing the path data for each file and adding it to a JSON
              object. The paths can then be loading into the <code>{`<railz-icon />`}</code> component by calling the original file name, minus the .svg file extension.
            </p>
            <h3>Update the Library</h3>
            <p>From the project root, in the terminal, run: </p>
            <pre>
              <code>npm run generate:icons</code>
            </pre>
          </section>
        </div>
      </div>
    );
  }
}
