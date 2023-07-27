import { newSpecPage } from '@stencil/core/testing';
import { PtgRadiobuton } from './ptg-radiobuton';

describe('ptg-radiobuton', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PtgRadiobuton],
      html: '<ptg-radiobuton></ptg-radiobuton>',
    });
    expect(root).toEqualHtml(`
      <ptg-radiobuton>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ptg-radiobuton>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PtgRadiobuton],
      html: `<ptg-radiobuton first="Stencil" last="'Don't call me a framework' JS"></ptg-radiobuton>`,
    });
    expect(root).toEqualHtml(`
      <ptg-radiobuton first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ptg-radiobuton>
    `);
  });
});
