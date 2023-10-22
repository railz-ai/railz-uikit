import { newSpecPage } from '@stencil/core/testing';
import { PageMotion } from '../page-motion';

describe('page-motion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageMotion],
      html: `<page-motion></page-motion>`,
    });
    expect(page.root).toEqualHtml(`
      <page-motion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-motion>
    `);
  });
});
