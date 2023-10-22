import { newSpecPage } from '@stencil/core/testing';
import { PageIcons } from '../page-icons';

describe('page-icons', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageIcons],
      html: `<page-icons></page-icons>`,
    });
    expect(page.root).toEqualHtml(`
      <page-icons>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-icons>
    `);
  });
});
