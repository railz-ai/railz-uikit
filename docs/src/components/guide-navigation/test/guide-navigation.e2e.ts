import { newE2EPage } from '@stencil/core/testing';

describe('guide-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<guide-navigation></guide-navigation>');

    const element = await page.find('guide-navigation');
    expect(element).toHaveClass('hydrated');
  });
});
