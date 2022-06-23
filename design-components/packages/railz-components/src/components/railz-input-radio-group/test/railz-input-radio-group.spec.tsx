import { newSpecPage } from '@stencil/core/testing';

import { RailzInputRadioGroup } from '../railz-input-radio-group';

describe.skip('railz-input-radio-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RailzInputRadioGroup],
      html: `<railz-input-radio-group></railz-input-radio-group>`,
    });
    expect(page.root).toEqualHtml(`
      <railz-input-radio-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </railz-input-radio-group>
    `);
  });
});
