import { newSpecPage } from '@stencil/core/testing';
import { PageFormControls } from '../page-form-controls';

describe('page-form-controls', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageFormControls],
      html: `<page-form-controls></page-form-controls>`,
    });
    expect(page.root).toEqualHtml(`
      <page-form-controls>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-form-controls>
    `);
  });
});
