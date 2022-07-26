import { newSpecPage } from '@stencil/core/testing';
import { IconLibraryList } from '../icon-library-list';

describe('icon-library-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLibraryList],
      html: `<icon-library-list></icon-library-list>`,
    });
    expect(page.root).toEqualHtml(`
      <icon-library-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </icon-library-list>
    `);
  });
});
