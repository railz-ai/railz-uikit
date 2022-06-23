import { newE2EPage } from '@stencil/core/testing';

describe.skip('railz-status-pill', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<railz-status-pill></railz-status-pill>');

    const element = await page.find('railz-status-pill');
    expect(element).toHaveClass('hydrated');
  });
});
