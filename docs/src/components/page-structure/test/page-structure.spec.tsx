import { newSpecPage } from '@stencil/core/testing';
import { PageStructure } from '../page-structure';

describe('page-structure', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageStructure],
      html: `<page-structure></page-structure>`,
    });
    expect(page.root).toEqualHtml(`
      <page-structure>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-structure>
    `);
  });
});
