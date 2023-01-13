import { Component, h, State } from '@stencil/core';
import { marked } from 'marked';
const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');
console.log(html);
console.log(typeof html);

@Component({
  tag: 'page-contributing',
  styleUrl: 'page-contributing.scss',
  shadow: true,
})
export class PageInstallationKit {
  @State()
  markdownContent: string = '';
  componentWillLoad() {
    fetch('../../CONTRIBUTING.md').then(async response => {
      this.markdownContent = marked.parse(await response.text());
    });
  }
  render() {
    const parse = new DOMParser();

    return <div class="container">{parse.parseFromString(this.markdownContent, 'text/html')}</div>;
  }
}
