import { newSpecPage } from '@stencil/core/testing';
import { ButtonList } from '../button-list';

describe('button-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ButtonList],
      html: `<button-list></button-list>`,
    });
    expect(page.root).toEqualHtml(`
      <button-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </button-list>
    `);
  });
});
