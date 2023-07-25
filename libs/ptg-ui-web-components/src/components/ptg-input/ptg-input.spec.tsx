import { newSpecPage } from '@stencil/core/testing';
import { PtgInput } from './ptg-input';

describe('ptg-input', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyInput],
      html: '<ptg-input></ptg-input>',
    });
    expect(root).toEqualHtml(`
      <ptg-input>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ptg-input>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyInput],
      html: `<ptg-input first="Stencil" last="'Don't call me a framework' JS"></ptg-input>`,
    });
    expect(root).toEqualHtml(`
      <ptg-input first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ptg-input>
    `);
  });
});
