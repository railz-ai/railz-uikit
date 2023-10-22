import { newE2EPage } from '@stencil/core/testing';

describe('page-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-modal></page-modal>');

    const element = await page.find('page-modal');
    expect(element).toHaveClass('hydrated');
  });
});
