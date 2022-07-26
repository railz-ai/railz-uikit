import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-dropdown-menu',
  styleUrl: 'page-dropdown-menu.scss',
  shadow: true,
})
export class PageDropdownMenu {
  render() {
    return (
      <div class="container">
        <div class="header">
          <h1>Dropdown Menu</h1>
        </div>
        <div class="content">
          <section>
            <h2>Usage</h2>
          </section>
        </div>
      </div>
    );
  }
}
