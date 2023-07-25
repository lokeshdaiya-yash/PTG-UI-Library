import { newSpecPage } from '@stencil/core/testing';
import { PtgCheckbox } from './ptg-checkbox';

describe('ptg-checkbox', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PtgCheckbox],
      html: '<ptg-checkbox></ptg-checkbox>',
    });
    expect(root).toEqualHtml(`
      <ptg-checkbox>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ptg-checkbox>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PtgCheckbox],
      html: `<ptg-checkbox first="Stencil" last="'Don't call me a framework' JS"></ptg-checkbox>`,
    });
    expect(root).toEqualHtml(`
      <ptg-checkbox first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ptg-checkbox>
    `);
  });
});
