import { newSpecPage } from '@stencil/core/testing';
import { PageDropdownMenu } from '../page-dropdown-menu';

describe('page-dropdown-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageDropdownMenu],
      html: `<page-dropdown-menu></page-dropdown-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <page-dropdown-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-dropdown-menu>
    `);
  });
});
