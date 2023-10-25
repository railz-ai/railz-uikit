import { newE2EPage } from '@stencil/core/testing';

describe('page-theme', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-theme></page-theme>');

    const element = await page.find('page-theme');
    expect(element).toHaveClass('hydrated');
  });
});
