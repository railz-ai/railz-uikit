import { newE2EPage } from '@stencil/core/testing';

describe('page-structure', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-structure></page-structure>');

    const element = await page.find('page-structure');
    expect(element).toHaveClass('hydrated');
  });
});
