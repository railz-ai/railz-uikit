import { newSpecPage } from '@stencil/core/testing';
import { RailzNested } from '../railz-nested';

describe('railz-nested', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RailzNested],
      html: `<railz-nested></railz-nested>`,
    });
    expect(page.root).toEqualHtml(`
      <railz-nested>
        <mock:shadow-root>
          <div>
         <p>
           <b>
             Now using Railz Nested Component
           </b>
         </p>
       </div>

        </mock:shadow-root>
      </railz-nested>
    `);
  });
});
