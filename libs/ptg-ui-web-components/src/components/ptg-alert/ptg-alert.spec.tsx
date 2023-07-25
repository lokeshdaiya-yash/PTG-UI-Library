import { newSpecPage } from '@stencil/core/testing';
import { PtgAlert } from './ptg-alert';

describe('ptg-alert', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PtgAlert],
      html: '<ptg-alert></ptg-alert>',
    });
    expect(root).toEqualHtml(`
      <ptg-alert>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ptg-alert>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PtgAlert],
      html: `<ptg-alert first="Stencil" last="'Don't call me a framework' JS"></ptg-alert>`,
    });
    expect(root).toEqualHtml(`
      <ptg-alert first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ptg-alert>
    `);
  });
});
