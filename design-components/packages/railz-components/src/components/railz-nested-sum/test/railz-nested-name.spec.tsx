import { newSpecPage } from '@stencil/core/testing';
import { RailzNestedSum } from '../railz-nested-name';

describe('railz-nested-name', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RailzNestedSum],
      html: `<railz-nested-name></railz-nested-name>`,
    });
    expect(page.root).toEqualHtml(`
      <railz-nested-name>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </railz-nested-name>
    `);
  });
});
