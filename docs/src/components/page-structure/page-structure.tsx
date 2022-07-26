import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-structure',
  styleUrl: 'page-structure.scss',
  shadow: true,
})
export class PageStructure {
  render() {
    return (
      <div class="container">
        <h2>Structure</h2>
      </div>
    );
  }
}
