import { newE2EPage } from '@stencil/core/testing';

describe.skip('railz-navigation-progress-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<railz-navigation-progress-bar></railz-navigation-progress-bar>');

    const element = await page.find('railz-navigation-progress-bar');
    expect(element).toHaveClass('hydrated');
  });
});
