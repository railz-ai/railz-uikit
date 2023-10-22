import { newE2EPage } from '@stencil/core/testing';

describe.skip('railz-icon-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<railz-icon-button></railz-icon-button>');

    const element = await page.find('railz-icon-button');
    expect(element).toHaveClass('hydrated');
  });
});
