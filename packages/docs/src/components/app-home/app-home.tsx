import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="home-div">
        <h1>Railz UIKit</h1>

        <p class="package-details">
          <a href="https://github.com/railz-ai/railz-uikit/blob/master/LICENSE">
            <img src="https://img.shields.io/npm/l/@railzai/railz-uikit" alt="Software License" />
          </a>
          <a href="https://www.npmjs.com/package/@railzai/railz-uikit">
            <img src="https://img.shields.io/npm/v/@railzai/railz-uikit/latest.svg" alt="Latest Package on NPM" />
          </a>
          <a href="https://github.com/railz-ai/railz-uikit/actions/workflows/publish.yml">
            <img src="https://github.com/railz-ai/railz-uikit/actions/workflows/publish.yml/badge.svg" alt="Latest Deployment" />
          </a>
          <a href="https://stenciljs.com/docs/style-guide">
            <img src="https://img.shields.io/badge/code_style-stencil/stylelint/prettier-5851ff.svg?style=flat-square" alt="Code Style" />
          </a>
        </p>

        <h2>Contains components libraries.</h2>
        <ul>
          <ol>
            <b>Railz UIKit</b> is a library of components that features our implementation of [Railz Connect](https://railz.ai/product/connect) widget and extended components.
          </ol>
          <ol>
            <b>Railz Tokens</b> is a library of design tokens.
          </ol>
          <ol>
            <b>Railz Icons</b> is a library of icon components.
          </ol>
        </ul>

        <div class="buttons">
          <a class="plain-a" href="/getting-started">
            <railz-button type="primary" label={'Get started'} />
          </a>
          <a class="plain-a" href="https://github.com/railz-ai/railz-uikit" target="_blank">
            <railz-button type="secondary" label={'GitHub'} />
          </a>
        </div>
      </div>
    );
  }
}
