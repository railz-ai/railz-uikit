import { newSpecPage } from '@stencil/core/testing';
import { PageModal } from '../page-modal';

describe('page-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageModal],
      html: `<page-modal></page-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <page-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-modal>
    `);
  });
});
