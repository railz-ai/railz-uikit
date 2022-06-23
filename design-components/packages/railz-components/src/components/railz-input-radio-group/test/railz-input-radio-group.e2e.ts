import { newE2EPage } from '@stencil/core/testing';

describe.skip('railz-input-radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<railz-input-radio-group></railz-input-radio-group>');

    const element = await page.find('railz-input-radio-group');
    expect(element).toHaveClass('hydrated');
  });
});
