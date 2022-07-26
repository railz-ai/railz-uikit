import { newSpecPage } from '@stencil/core/testing';
import { PageTypography } from '../page-typography';

describe('page-typography', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageTypography],
      html: `<page-typography></page-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <page-typography>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-typography>
    `);
  });
});
