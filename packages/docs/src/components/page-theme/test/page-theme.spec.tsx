import { newSpecPage } from '@stencil/core/testing';
import { PageTheme } from '../page-theme';

describe('page-theme', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageTheme],
      html: `<page-theme></page-theme>`,
    });
    expect(page.root).toEqualHtml(`
      <page-theme>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-theme>
    `);
  });
});
