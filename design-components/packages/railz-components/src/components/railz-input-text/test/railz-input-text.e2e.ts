import { newE2EPage } from '@stencil/core/testing';

describe.skip('railz-input-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<railz-input-text></railz-input-text>');

    const element = await page.find('railz-input-text');
    expect(element).toHaveClass('hydrated');
  });
});
