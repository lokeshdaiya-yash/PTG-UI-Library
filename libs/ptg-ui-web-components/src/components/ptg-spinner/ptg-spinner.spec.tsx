import { newSpecPage } from '@stencil/core/testing';
import { PtgSpinner } from './ptg-spinner';

describe('ptg-spinner', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PtgSpinner],
      html: '<ptg-spinner></ptg-spinner>',
    });
    expect(root).toEqualHtml(`
      <ptg-spinner>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ptg-spinner>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PtgSpinner],
      html: `<ptg-spinner first="Stencil" last="'Don't call me a framework' JS"></ptg-spinner>`,
    });
    expect(root).toEqualHtml(`
      <ptg-spinner first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ptg-spinner>
    `);
  });
});
