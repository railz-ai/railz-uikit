import { newSpecPage } from '@stencil/core/testing';

import { RailzInputCheckbox } from '../railz-input-checkbox';

describe.skip('railz-input-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RailzInputCheckbox],
      html: `<railz-input-checkbox></railz-input-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <railz-input-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </railz-input-checkbox>
    `);
  });
});
