import { newE2EPage } from '@stencil/core/testing';

describe('page-status-pills', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-status-pills></page-status-pills>');

    const element = await page.find('page-status-pills');
    expect(element).toHaveClass('hydrated');
  });
});
