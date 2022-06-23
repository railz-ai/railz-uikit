import { newSpecPage } from '@stencil/core/testing';

import { RailzButton } from '../railz-button';

describe.skip('railz-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RailzButton],
      html: `<railz-button></railz-button>`,
    });
    expect(page.root).toEqualHtml(`
      <railz-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </railz-button>
    `);
  });
});
