import { newE2EPage } from '@stencil/core/testing';

describe.skip('railz-input-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<railz-input-checkbox></railz-input-checkbox>');

    const element = await page.find('railz-input-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
