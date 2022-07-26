import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-installation-tokens',
  styleUrl: 'page-installation-tokens.scss',
  shadow: true,
})
export class PageInstallationTokens {
  render() {
    return (
      <div class="container">
        <div class="header">
          <h1>Railz Tokens Installation</h1>
        </div>
        <div class="content">
          <section>
            <h2>Installation</h2>
            <h3>With NPM:</h3>
            <pre>
                <code>{`npm install @railzai/railz-tokens`}</code>
            </pre>
            <h3>With Yarn:</h3>
            <pre>
                <code>{`yarn add @railzai/railz-tokens`}</code>
            </pre>
          </section>
        </div>
      </div>
    );
  }
}
