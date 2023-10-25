import { newE2EPage } from '@stencil/core/testing';

describe.skip('railz-input-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<railz-input-toggle></railz-input-toggle>');

    const element = await page.find('railz-input-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
