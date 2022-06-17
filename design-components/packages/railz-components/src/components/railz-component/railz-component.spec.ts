import { newSpecPage } from '@stencil/core/testing';
import { RailzComponent } from './railz-component';

describe('railz-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [RailzComponent],
      html: '<railz-component></railz-component>',
    });
    expect(root).toEqualHtml(`
      <railz-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </railz-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [RailzComponent],
      html: `<railz-component first="Stencil" last="'Don't call me a framework' JS"></railz-component>`,
    });
    expect(root).toEqualHtml(`
      <railz-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </railz-component>
    `);
  });
});
