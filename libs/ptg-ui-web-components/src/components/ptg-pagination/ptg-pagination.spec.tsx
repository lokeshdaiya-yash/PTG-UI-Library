import { newSpecPage } from '@stencil/core/testing';
import { PtgPagination } from './ptg-pagination';

describe('ptg-pagination', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PtgPagination],
      html: '<ptg-pagination></ptg-pagination>',
    });
    expect(root).toEqualHtml(`
      <ptg-pagination>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ptg-pagination>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PtgPagination],
      html: `<ptg-pagination first="Stencil" last="'Don't call me a framework' JS"></ptg-pagination>`,
    });
    expect(root).toEqualHtml(`
      <ptg-pagination first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ptg-pagination>
    `);
  });
});
