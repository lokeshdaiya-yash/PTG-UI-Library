import { newE2EPage } from '@stencil/core/testing';

describe('ptg-carousel', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ptg-carousel></ptg-carousel>');
    const element = await page.find('ptg-carousel');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<ptg-carousel></ptg-carousel>');
    const component = await page.find('ptg-carousel');
    const element = await page.find('ptg-carousel >>> div');
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
