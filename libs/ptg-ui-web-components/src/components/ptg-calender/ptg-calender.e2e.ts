import { newE2EPage } from '@stencil/core/testing';

describe('ptg-calender', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ptg-calender></ptg-calender>');
    const element = await page.find('ptg-calender');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<ptg-calender></ptg-calender>');
    const component = await page.find('ptg-calender');
    const element = await page.find('ptg-calender >>> div');
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
