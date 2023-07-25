import { newSpecPage } from '@stencil/core/testing';
import { PtgSidenav } from './ptg-sidenav';

describe('ptg-sidenav', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PtgSidenav],
      html: '<ptg-sidenav></ptg-sidenav>',
    });
    expect(root).toEqualHtml(`
      <ptg-sidenav>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ptg-sidenav>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PtgSidenav],
      html: `<ptg-sidenav first="Stencil" last="'Don't call me a framework' JS"></ptg-sidenav>`,
    });
    expect(root).toEqualHtml(`
      <ptg-sidenav first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ptg-sidenav>
    `);
  });
});
