import { newSpecPage } from '@stencil/core/testing';
import { PtgTable } from './ptg-table';

describe('ptg-table', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PtgTable],
      html: '<ptg-table></ptg-table>',
    });
    expect(root).toEqualHtml(`
      <ptg-table>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ptg-table>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PtgTable],
      html: `<ptg-table first="Stencil" last="'Don't call me a framework' JS"></ptg-table>`,
    });
    expect(root).toEqualHtml(`
      <ptg-table first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ptg-table>
    `);
  });
});
