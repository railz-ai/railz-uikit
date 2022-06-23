import { newE2EPage } from '@stencil/core/testing';

describe.skip('railz-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<railz-icon></railz-icon>');

    const element = await page.find('railz-icon');
    expect(element).toHaveClass('hydrated');
  });
});
