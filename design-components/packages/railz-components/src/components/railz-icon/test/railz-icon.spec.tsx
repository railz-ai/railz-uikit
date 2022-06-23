import { newSpecPage } from '@stencil/core/testing';

import { RailzIcon } from '../railz-icon';

describe.skip('railz-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RailzIcon],
      html: `<railz-icon></railz-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <railz-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </railz-icon>
    `);
  });
});
