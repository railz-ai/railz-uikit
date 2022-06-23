import { newSpecPage } from '@stencil/core/testing';

import { RailzInputRadio } from '../railz-input-radio';

describe.skip('railz-input-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RailzInputRadio],
      html: `<railz-input-radio></railz-input-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <railz-input-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </railz-input-radio>
    `);
  });
});
