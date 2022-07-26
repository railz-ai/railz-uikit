import { newE2EPage } from '@stencil/core/testing';

describe('page-icons', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-icons></page-icons>');

    const element = await page.find('page-icons');
    expect(element).toHaveClass('hydrated');
  });
});
