import { newSpecPage } from '@stencil/core/testing';
import { PtgAccordion } from './ptg-accordion';

describe('ptg-accordion', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyAccordian],
      html: '<ptg-accordion></ptg-accordion>',
    });
    expect(root).toEqualHtml(`
      <ptg-accordion>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ptg-accordion>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyAccordian],
      html: `<ptg-accordion first="Stencil" last="'Don't call me a framework' JS"></ptg-accordion>`,
    });
    expect(root).toEqualHtml(`
      <ptg-accordion first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ptg-accordion>
    `);
  });
});
