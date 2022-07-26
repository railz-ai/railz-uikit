import { newE2EPage } from '@stencil/core/testing';

describe('button-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<button-list></button-list>');

    const element = await page.find('button-list');
    expect(element).toHaveClass('hydrated');
  });
});
