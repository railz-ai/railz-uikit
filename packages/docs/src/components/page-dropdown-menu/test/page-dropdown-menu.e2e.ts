import { newE2EPage } from '@stencil/core/testing';

describe('page-dropdown-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-dropdown-menu></page-dropdown-menu>');

    const element = await page.find('page-dropdown-menu');
    expect(element).toHaveClass('hydrated');
  });
});
