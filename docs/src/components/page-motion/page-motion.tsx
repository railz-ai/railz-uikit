import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-motion',
  styleUrl: 'page-motion.scss',
  shadow: true,
})
export class PageMotion {
  render() {
    return (
      <div class="container">
        <div class="header">
          <h1>Motion</h1>
        </div>
      </div>
    );
  }
}
