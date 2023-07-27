import { newSpecPage } from '@stencil/core/testing';
import { PtgCalender } from './ptg-calender';

describe('ptg-calender', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyCalender],
      html: '<ptg-calender></ptg-calender>',
    });
    expect(root).toEqualHtml(`
      <ptg-calender>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ptg-calender>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyCalender],
      html: `<ptg-calender first="Stencil" last="'Don't call me a framework' JS"></ptg-calender>`,
    });
    expect(root).toEqualHtml(`
      <ptg-calender first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ptg-calender>
    `);
  });
});
