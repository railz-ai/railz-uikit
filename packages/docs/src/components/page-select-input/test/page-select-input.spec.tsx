import { newSpecPage } from '@stencil/core/testing';
import { PageSelectInput } from '../page-select-input';

describe('page-select-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageSelectInput],
      html: `<page-select-input></page-select-input>`,
    });
    expect(page.root).toEqualHtml(`
      <page-select-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-select-input>
    `);
  });
});
