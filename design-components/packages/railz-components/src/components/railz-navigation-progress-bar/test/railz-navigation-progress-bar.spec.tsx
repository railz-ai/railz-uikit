import { newSpecPage } from '@stencil/core/testing';

import { RailzNavigationProgressBar } from '../railz-navigation-progress-bar';

describe.skip('railz-navigation-progress-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RailzNavigationProgressBar],
      html: `<railz-navigation-progress-bar></railz-navigation-progress-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <railz-navigation-progress-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </railz-navigation-progress-bar>
    `);
  });
});
