import { newE2EPage } from '@stencil/core/testing';

describe.skip('railz-input-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<railz-input-select></railz-input-select>');

    const element = await page.find('railz-input-select');
    expect(element).toHaveClass('hydrated');
  });
});
