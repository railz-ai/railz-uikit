import { Component, h, State } from '@stencil/core';
import { marked } from 'marked';

@Component({
  tag: 'page-contributing',
  styleUrl: 'page-contributing.scss',
  shadow: true,
})
export class PageInstallationKit {
  @State() markdownContent: string = '';

  componentWillLoad() {
    fetch('../CONTRIBUTING.md').then(async response => {
      const text = await response.text();
      this.markdownContent = marked(text);
    });
  }

  render() {
    return <div class="container" innerHTML={this.markdownContent}></div>;
  }
}
