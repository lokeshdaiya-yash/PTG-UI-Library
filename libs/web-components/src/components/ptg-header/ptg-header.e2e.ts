import { newE2EPage } from '@stencil/core/testing';

describe('ptg-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ptg-header></ptg-header>');
    const element = await page.find('ptg-header');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<ptg-header></ptg-header>');
    const component = await page.find('ptg-header');
    const element = await page.find('ptg-header >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
