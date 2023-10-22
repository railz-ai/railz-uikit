import { newSpecPage } from '@stencil/core/testing';
import { PageButtons } from '../page-buttons';

describe('page-buttons', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageButtons],
      html: `<page-buttons></page-buttons>`,
    });
    expect(page.root).toEqualHtml(`
      <page-buttons>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-buttons>
    `);
  });
});
