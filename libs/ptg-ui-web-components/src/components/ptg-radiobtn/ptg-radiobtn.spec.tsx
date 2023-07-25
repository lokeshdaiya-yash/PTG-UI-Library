import { newSpecPage } from '@stencil/core/testing';
import { PtgRadiobtn } from './ptg-radiobtn';

describe('ptg-radiobtn', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PtgRadiobtn],
      html: '<ptg-radiobtn></ptg-radiobtn>',
    });
    expect(root).toEqualHtml(`
      <ptg-radiobtn>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ptg-radiobtn>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PtgRadiobtn],
      html: `<ptg-radiobtn first="Stencil" last="'Don't call me a framework' JS"></ptg-radiobtn>`,
    });
    expect(root).toEqualHtml(`
      <ptg-radiobtn first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ptg-radiobtn>
    `);
  });
});
