import { newSpecPage } from '@stencil/core/testing';
import { PtgButton } from './ptg-button';

describe('ptg-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PtgButton],
      html: '<ptg-button></ptg-button>',
    });
    expect(root).toEqualHtml(`
      <ptg-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ptg-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PtgButton],
      html: `<ptg-button first="Stencil" last="'Don't call me a framework' JS"></ptg-button>`,
    });
    expect(root).toEqualHtml(`
      <ptg-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ptg-button>
    `);
  });
});
