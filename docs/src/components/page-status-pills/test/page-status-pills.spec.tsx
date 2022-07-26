import { newSpecPage } from '@stencil/core/testing';
import { PageStatusPills } from '../page-status-pills';

describe('page-status-pills', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageStatusPills],
      html: `<page-status-pills></page-status-pills>`,
    });
    expect(page.root).toEqualHtml(`
      <page-status-pills>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-status-pills>
    `);
  });
});
