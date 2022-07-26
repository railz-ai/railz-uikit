import { newE2EPage } from '@stencil/core/testing';

describe('page-colors', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-colors></page-colors>');

    const element = await page.find('page-colors');
    expect(element).toHaveClass('hydrated');
  });
});
