import { newSpecPage } from '@stencil/core/testing';

import { RailzInputToggle } from '../railz-input-toggle';

describe.skip('railz-input-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RailzInputToggle],
      html: `<railz-input-toggle></railz-input-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <railz-input-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </railz-input-toggle>
    `);
  });
});
