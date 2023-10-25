import { newE2EPage } from '@stencil/core/testing';

describe('page-buttons', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-buttons></page-buttons>');

    const element = await page.find('page-buttons');
    expect(element).toHaveClass('hydrated');
  });
});
