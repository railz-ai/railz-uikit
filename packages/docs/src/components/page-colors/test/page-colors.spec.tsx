import { newSpecPage } from '@stencil/core/testing';
import { PageColors } from '../page-colors';

describe('page-colors', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageColors],
      html: `<page-colors></page-colors>`,
    });
    expect(page.root).toEqualHtml(`
      <page-colors>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-colors>
    `);
  });
});
