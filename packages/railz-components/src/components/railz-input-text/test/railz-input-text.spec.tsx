import { newSpecPage } from '@stencil/core/testing';

import { RailzInputText } from '../railz-input-text';

describe.skip('railz-input-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RailzInputText],
      html: `<railz-input-text></railz-input-text>`,
    });
    expect(page.root).toEqualHtml(`
      <railz-input-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </railz-input-text>
    `);
  });
});
