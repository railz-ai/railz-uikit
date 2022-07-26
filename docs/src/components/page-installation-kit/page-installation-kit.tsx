import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-installation-kit',
  styleUrl: 'page-installation-kit.scss',
  shadow: true,
})
export class PageInstallationKit {
  render() {
    return (
      <div class="container">
        <div class="header">
          <h1>Getting Started</h1>
        </div>
        <div class="content">
          <section>
            <h2>Installation</h2>
            <h3>Framework Specific Installation</h3>
            <h4>Angular</h4>
            <h5>With NPM:</h5>
            <pre>
                <code>{`npm install @railzai/railz-uikit-angular`}</code>
            </pre>
            <h5>With Yarn:</h5>
            <pre>
                <code>{`yarn add @railzai/railz-uikit-angular`}</code>
            </pre>
            <h4>React</h4>
            <h5>With NPM:</h5>
            <pre>
                <code>{`npm install @railzai/railz-uikit-react`}</code>
            </pre>
            <h5>With Yarn:</h5>
            <pre>
                <code>{`yarn add @railzai/railz-uikit-react`}</code>
            </pre>
            <h4>Vue</h4>
            <h5>With NPM:</h5>
            <pre>
                <code>{`npm install @railzai/railz-uikit-vue`}</code>
            </pre>
            <h5>With Yarn:</h5>
            <pre>
                <code>{`yarn add @railzai/railz-uikit-vue`}</code>
            </pre>
            <h4>Web Component</h4>
            <h5>With NPM:</h5>
            <pre>
                <code>{`npm install @railzai/railz-uikit`}</code>
            </pre>
            <h5>With Yarn:</h5>
            <pre>
                <code>{`yarn add @railzai/railz-uikit`}</code>
            </pre>
          </section>
        </div>
      </div>
    );
  }
}
