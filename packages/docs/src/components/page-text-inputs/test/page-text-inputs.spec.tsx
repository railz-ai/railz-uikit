import { newSpecPage } from '@stencil/core/testing';
import { PageTextInputs } from '../page-text-inputs';

describe('page-text-inputs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageTextInputs],
      html: `<page-text-inputs></page-text-inputs>`,
    });
    expect(page.root).toEqualHtml(`
      <page-text-inputs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-text-inputs>
    `);
  });
});
