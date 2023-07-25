import { newSpecPage } from '@stencil/core/testing';
import { PtgToast } from './ptg-toast';

describe('ptg-toast', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PtgToast],
      html: '<ptg-toast></ptg-toast>',
    });
    expect(root).toEqualHtml(`
      <ptg-toast>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ptg-toast>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PtgToast],
      html: `<ptg-toast first="Stencil" last="'Don't call me a framework' JS"></ptg-toast>`,
    });
    expect(root).toEqualHtml(`
      <ptg-toast first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ptg-toast>
    `);
  });
});
