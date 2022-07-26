import { newE2EPage } from '@stencil/core/testing';

describe('page-text-inputs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-text-inputs></page-text-inputs>');

    const element = await page.find('page-text-inputs');
    expect(element).toHaveClass('hydrated');
  });
});
