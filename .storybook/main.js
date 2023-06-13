module.exports = {
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)',
            '../src/lib/**/*.mdx'],
  addons: ['@storybook/addon-essentials','@storybook/addon-docs']
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
  ,

  framework: {
//  name: '@storybook/angular',
    name : '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: true,
    defaultName: 'Documents', // set to change the name of generated docs entries
  },

};





// module.exports = {
//   stories: [],
//   addons: ['@storybook/addon-essentials']
//   // uncomment the property below if you want to apply some webpack config globally
//   // webpackFinal: async (config, { configType }) => {
//   //   // Make whatever fine-grained changes you need that should apply to all storybook configs

//   //   // Return the altered config
//   //   return config;
//   // },
//   ,

//   framework: {
//     name: '@storybook/angular',
//     options: {}
//   },
//   docs: {
//     autodocs: true,
//   }
// };