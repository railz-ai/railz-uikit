import { newE2EPage } from '@stencil/core/testing';

describe.skip('railz-input-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<railz-input-radio></railz-input-radio>');

    const element = await page.find('railz-input-radio');
    expect(element).toHaveClass('hydrated');
  });
});
