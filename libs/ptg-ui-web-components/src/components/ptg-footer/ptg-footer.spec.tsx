import { newSpecPage } from '@stencil/core/testing';

import { PtgFooter } from './ptg-footer';



describe('ptg-footer', () => {

  it('renders', async () => {

    const { root } = await newSpecPage({

      components: [PtgFooter],

      html: '<ptg-footer></ptg-footer>',

    });

    expect(root).toEqualHtml(`

      <ptg-footer>

        <mock:shadow-root>

          <div>

            Hello, World! I'm

          </div>

        </mock:shadow-root>

      </ptg-footer>

    `);

  });



  it('renders with values', async () => {

    const { root } = await newSpecPage({

      components: [PtgFooter],

      html: `<ptg-footer first="Stencil" last="'Don't call me a framework' JS"></ptg-footer>`,

    });

    expect(root).toEqualHtml(`

      <ptg-footer first="Stencil" last="'Don't call me a framework' JS">

        <mock:shadow-root>

          <div>

            Hello, World! I'm Stencil 'Don't call me a framework' JS

          </div>

        </mock:shadow-root>

      </ptg-footer>

    `);

  });

});