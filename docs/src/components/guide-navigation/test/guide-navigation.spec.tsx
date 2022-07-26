import { newSpecPage } from '@stencil/core/testing';
import { GuideNavigation } from '../guide-navigation';

describe('guide-navigation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GuideNavigation],
      html: `<guide-navigation></guide-navigation>`,
    });
    expect(page.root).toEqualHtml(`
      <guide-navigation>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </guide-navigation>
    `);
  });
});
