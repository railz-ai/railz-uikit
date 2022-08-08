import { Component, h, Prop, State } from '@stencil/core';

export interface Page {
  name: string;
  state?: 'pending' | 'current' | 'success' | 'skipped';
}
@Component({
  tag: 'railz-navigation-progress-bar',
  styleUrl: 'railz-navigation-progress-bar.scss',
  shadow: true,
})
export class RailzNavigationProgressBar {
  @Prop() pages: Page[];
  @State() selectedPage: Page;

  render(): HTMLElement {
    return (
      <nav>
        <ul class="pages">
          {this.pages &&
            this.pages.map(page => (
              <li class={`page ${page.state} ${this.selectedPage == page ? 'current' : null}`}>
                <div class="indicator">{page.state === 'skipped' && <railz-icon icon="indeterminate" />}</div>
                <span class="label">{page.name}</span>
              </li>
            ))}
        </ul>
      </nav>
    );
  }
}
