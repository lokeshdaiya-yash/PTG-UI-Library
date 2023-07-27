import { newSpecPage } from '@stencil/core/testing';
import { PtgSelect } from './ptg-select';

describe('ptg-select', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PtgSelect],
      html: '<ptg-select></ptg-select>',
    });
    expect(root).toEqualHtml(`
      <ptg-select>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ptg-select>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PtgSelect],
      html: `<ptg-select first="Stencil" last="'Don't call me a framework' JS"></ptg-select>`,
    });
    expect(root).toEqualHtml(`
      <ptg-select first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ptg-select>
    `);
  });
});
