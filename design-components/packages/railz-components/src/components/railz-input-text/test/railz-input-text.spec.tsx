import { newSpecPage } from '@stencil/core/testing';
import { RailzTextInput } from '../railz-input-text';

describe('railz-input-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RailzTextInput],
      html: `<railz-input-text></railz-input-text>`,
    });
    expect(page.root).toEqualHtml(`
      <railz-input-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </railz-input-text>
    `);
  });
});
