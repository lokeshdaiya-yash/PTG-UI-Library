import { newSpecPage } from '@stencil/core/testing';
import { PtgHeader } from './ptg-header';

describe('ptg-header', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PtgHeader],
      html: '<ptg-header></ptg-header>',
    });
    expect(root).toEqualHtml(`
      <ptg-header>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ptg-header>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PtgHeader],
      html: `<ptg-header first="Stencil" last="'Don't call me a framework' JS"></ptg-header>`,
    });
    expect(root).toEqualHtml(`
      <ptg-header first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ptg-header>
    `);
  });
});
