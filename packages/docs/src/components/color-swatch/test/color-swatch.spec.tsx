import { newSpecPage } from '@stencil/core/testing';
import { ColorSwatch } from '../color-swatch';

describe('color-swatch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ColorSwatch],
      html: `<color-swatch></color-swatch>`,
    });
    expect(page.root).toEqualHtml(`
      <color-swatch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </color-swatch>
    `);
  });
});
