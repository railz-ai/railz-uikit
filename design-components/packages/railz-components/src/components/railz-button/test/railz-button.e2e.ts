import { newE2EPage } from '@stencil/core/testing';

describe.skip('railz-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<railz-button></railz-button>');

    const element = await page.find('railz-button');
    expect(element).toHaveClass('hydrated');
  });
});
