import { Component, Fragment, h, Prop } from '@stencil/core';

export interface Page {
  name: string;
  state?: 'pending' | 'current' | 'success' | 'skipped';
  onClick: any;
}
@Component({
  tag: 'railz-navigation-progress-bar',
  styleUrl: 'railz-navigation-progress-bar.scss',
  shadow: true,
})
export class RailzNavigationProgressBar {
  @Prop() pages: Page[];

  private page(page): HTMLElement {
    return (
      <Fragment>
        <div class="indicator">
          {page.state === 'skipped' && (
            //TODO - Resolve icon component bug -zach forrester
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <polygon fill="#323232" fill-rule="evenodd" points="3 7 13 7 13 9 3 9" />
              </svg>
            </div>
          )}
        </div>
        <div class="label-container">
          <span class="label">{page.name}</span>
          <span class="selected-label" aria-hidden>
            {page.name}
          </span>
        </div>
      </Fragment>
    );
  }

  render(): HTMLElement {
    const successIndexArray = Object.values(this.pages).map((page: Page, index) => {
      if (page.state === 'success') return index + 1;
      return 0;
    });
    const completedPages = Math.max(...successIndexArray) || 1;

    return (
      <nav>
        <ul class={`pages completed-${completedPages}`}>
          {this.pages &&
            this.pages.map(page => (
              <li class={`page ${page.state || 'pending'} `}>
                <button onClick={page.onClick}>{this.page(page)}</button>
              </li>
            ))}
        </ul>
      </nav>
    );
  }
}
