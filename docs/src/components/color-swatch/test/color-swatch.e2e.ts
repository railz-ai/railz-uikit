import { newE2EPage } from '@stencil/core/testing';

describe('color-swatch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<color-swatch></color-swatch>');

    const element = await page.find('color-swatch');
    expect(element).toHaveClass('hydrated');
  });
});
