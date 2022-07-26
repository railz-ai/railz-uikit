import { newE2EPage } from '@stencil/core/testing';

describe('page-form-controls', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-form-controls></page-form-controls>');

    const element = await page.find('page-form-controls');
    expect(element).toHaveClass('hydrated');
  });
});
