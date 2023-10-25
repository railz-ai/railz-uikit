import { newE2EPage } from '@stencil/core/testing';

describe('page-select-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-select-input></page-select-input>');

    const element = await page.find('page-select-input');
    expect(element).toHaveClass('hydrated');
  });
});
