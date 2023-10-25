import { newE2EPage } from '@stencil/core/testing';

describe('page-motion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-motion></page-motion>');

    const element = await page.find('page-motion');
    expect(element).toHaveClass('hydrated');
  });
});
