import { newE2EPage } from '@stencil/core/testing';

describe('page-typography', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-typography></page-typography>');

    const element = await page.find('page-typography');
    expect(element).toHaveClass('hydrated');
  });
});
