import { newSpecPage } from '@stencil/core/testing';
import { PtgTextarea } from './ptg-textarea';

describe('ptg-textarea', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PtgTextarea],
      html: '<ptg-textarea></ptg-textarea>',
    });
    expect(root).toEqualHtml(`
      <ptg-textarea>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ptg-textarea>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PtgTextarea],
      html: `<ptg-textarea first="Stencil" last="'Don't call me a framework' JS"></ptg-textarea>`,
    });
    expect(root).toEqualHtml(`
      <ptg-textarea first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ptg-textarea>
    `);
  });
});
