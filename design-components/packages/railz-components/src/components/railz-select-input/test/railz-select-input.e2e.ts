import { newE2EPage } from '@stencil/core/testing';

describe.skip('railz-select-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<railz-select-input></railz-select-input>');

    const element = await page.find('railz-select-input');
    expect(element).toHaveClass('hydrated');
  });
});
