import { newSpecPage } from '@stencil/core/testing';
import { PtgCarousel } from './ptg-carousel';

describe('ptg-carousel', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PtgCarousel],
      html: '<ptg-carousel></ptg-carousel>',
    });
    expect(root).toEqualHtml(`
      <ptg-carousel>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ptg-carousel>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PtgCarousel],
      html: `<ptg-carousel first="Stencil" last="'Don't call me a framework' JS"></ptg-carousel>`,
    });
    expect(root).toEqualHtml(`
      <ptg-carousel first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ptg-carousel>
    `);
  });
});
