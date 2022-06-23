import { newSpecPage } from '@stencil/core/testing';

import { RailzSelectInput } from '../railz-select-input';

describe.skip('railz-select-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RailzSelectInput],
      html: `<railz-select-input></railz-select-input>`,
    });
    expect(page.root).toEqualHtml(`
      <railz-select-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </railz-select-input>
    `);
  });
});
