import { newSpecPage } from '@stencil/core/testing';
import { ColorSwatchList } from '../color-swatch-list';

describe('color-swatch-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ColorSwatchList],
      html: `<color-swatch-list></color-swatch-list>`,
    });
    expect(page.root).toEqualHtml(`
      <color-swatch-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </color-swatch-list>
    `);
  });
});
