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

  render(): HTMLElement {
    return (
      <nav>
        <ul class="pages">
          {this.pages &&
            this.pages.map(page => (
              <li class={`page ${page.state}`}>
                <div class="indicator">
                  {page.state === 'skipped' && (
                    //TODO - Resolve icon component bug -zf
                    <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <polygon fill="#323232" fill-rule="evenodd" points="3 7 13 7 13 9 3 9" />
                      </svg>
                    </div>
                  )}
                </div>
                <span class="label">{page.name}</span>
              </li>
            ))}
        </ul>
      </nav>
    );
  }
}
