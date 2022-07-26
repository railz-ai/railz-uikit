import { newE2EPage } from '@stencil/core/testing';

describe('icon-library-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-library-list></icon-library-list>');

    const element = await page.find('icon-library-list');
    expect(element).toHaveClass('hydrated');
  });
});
