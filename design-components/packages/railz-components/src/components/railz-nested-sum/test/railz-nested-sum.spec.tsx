import { newSpecPage } from '@stencil/core/testing';

import { RailzNestedSum } from '../railz-nested-sum';

describe.skip('railz-nested-sum', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RailzNestedSum],
      html: `<railz-nested-sum></railz-nested-sum>`,
    });
    expect(page.root).toEqualHtml(`
      <railz-nested-sum>
        <mock:shadow-root>
          <div>
            The sum of 0 &amp; 0 is
            <b>
              0
            </b>
          </div>
        </mock:shadow-root>
    </railz-nested-sum>

    `);
  });
});
