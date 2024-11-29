import { newSpecPage } from '@stencil/core/testing';

import { RailzButton } from '../railz-button';

describe('railz-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RailzButton],
      html: `<railz-button></railz-button>`,
    });
    expect(page.root).toEqualHtml(`
      <railz-button class="button medium primary rounded">
        <button class="button medium primary rounded">
          <div class="icon prefix-icon"></div>
          <span class="label"></span>
          <div class="icon suffix-icon"></div>
       </button>
      </railz-button>
    `);
  });

  it('renders with rel', async () => {
    const page = await newSpecPage({
      components: [RailzButton],
      html: `<railz-button rel="noreferrer"></railz-button>`,
    });
    expect(page.root).toEqualHtml(`
      <railz-button class="button medium primary rounded" rel="noreferrer">
        <button class="button medium primary rounded">
          <div class="icon prefix-icon"></div>
          <span class="label"></span>
          <div class="icon suffix-icon"></div>
       </button>
      </railz-button>
    `);
  });

  it('renders correctly without href', async () => {
    const page = await newSpecPage({
      components: [RailzButton],
      html: `<railz-button label="Click me"></railz-button>`,
    });

    expect(page.root).toEqualHtml(`
      <railz-button class="button medium primary rounded" label="Click me">
        <button class="button medium primary rounded">
          <div class="icon prefix-icon"></div>
          <span class="label">Click me</span>
          <div class="icon suffix-icon"></div>
       </button>
      </railz-button>
    `);
  });
});

// stencil test --spec packages/railz-components/src/components/railz-button/test/railz-button.spec.tsx
