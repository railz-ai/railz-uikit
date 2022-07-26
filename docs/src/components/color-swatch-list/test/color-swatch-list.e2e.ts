import { newE2EPage } from '@stencil/core/testing';

describe('color-swatch-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<color-swatch-list></color-swatch-list>');

    const element = await page.find('color-swatch-list');
    expect(element).toHaveClass('hydrated');
  });
});
