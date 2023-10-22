import { newSpecPage } from '@stencil/core/testing';

import { RailzStatusPill } from '../railz-status-pill';

describe.skip('railz-status-pill', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RailzStatusPill],
      html: `<railz-status-pill></railz-status-pill>`,
    });
    expect(page.root).toEqualHtml(`
      <railz-status-pill>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </railz-status-pill>
    `);
  });
});
