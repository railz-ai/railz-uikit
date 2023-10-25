import { newSpecPage } from '@stencil/core/testing';

import { RailzInputSelect } from '../railz-input-select';

describe.skip('railz-input-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RailzInputSelect],
      html: `<railz-input-select></railz-input-select>`,
    });
    expect(page.root).toEqualHtml(`
      <railz-input-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </railz-input-select>
    `);
  });
});
