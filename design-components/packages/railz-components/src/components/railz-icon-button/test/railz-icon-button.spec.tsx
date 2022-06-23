import { newSpecPage } from '@stencil/core/testing';

import { RailzIconButton } from '../railz-icon-button';

describe.skip('railz-icon-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RailzIconButton],
      html: `<railz-icon-button></railz-icon-button>`,
    });
    expect(page.root).toEqualHtml(`
      <railz-icon-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </railz-icon-button>
    `);
  });
});
