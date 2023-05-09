import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';


storiesOf('Addon|Actions', module)
  .add('Action only', () => ({
    component: ButtonComponent,
    props: {
      text: 'Action only',
      onClick: action('log 1')
    }
  }))



export default {
  title: 'Component/ButtonComponent',
  component: ButtonComponent,
  
  parameters: {
    backgroundColor: {
      default: 'red',
      values: [
        { name: 'red', value: '#00aced' },
        { name: 'facebook', value: '#3b5998' },
      ],
    },
  },
  argTypes: {
    isDisable : {
     control: 'boolean',
    },
    isBlock : {
      control:'boolean' 
    },
    backgroundColor: { 
      control: 'color',
      category: 'Colors',
       },
       
    size: {
      options: ['small','medium', 'large'],
      mapping: {
        small: 'small',
        medium: 'medium',
        large:'large',
      },
      description: 'Size options for the button',
      // variant: {
      //   options: ['small','medium', 'large'],
      //   control: { type: 'radio' },
      // },
         
     
      control: {
        type: 'radio',
        labels: {
          small: 'small',
          medium: 'medium',
          large:'large',
        }
      },
      // table: { category: 'format' }
    },
    },

  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  component: ButtonComponent,
});


export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
    type: 'button',
    isDisable: false,
    isBlock: false,
    accessKey: '', 
    
  };


  
  
export const Small = Template.bind({});
  Small.args = {
    type: 'button',
    label: 'Button',
    isDisable: false,
    isBlock: false,
    accessKey: '',
    size: 'small',
    // btnStyleType:'primary'
    // backgroundColor : 'red'
  };
  
export const Medium = Template.bind({});
  Medium.args = {
    type: 'button',
    label: 'Button',
    isDisable: false,
    isBlock: false,
    accessKey: '',
    size: 'medium',
    // btnStyleType:'primary'
    // backgroundColor : 'red'
  };
  
export const Large = Template.bind({});
  Large.args = {
    type: 'button',
    isDisable: false,
    isBlock: false,
    label: 'Button',
    accessKey: '',
    size: 'large',
   // btnStyleType:'primary'
    // backgroundColor : 'red'
  };


  export const isDisable = Template.bind({});
  isDisable.args = {
    type: 'button',
    isDisable: true,
    label: 'Button',
    isBlock: false,
  };


  export const isBlock = Template.bind({});
  isBlock.args = {
    label: 'Button',
    type: 'button',
    isDisable: false,
    isBlock: true,
  };





































// export const Primary = () => ({
//   props: { label: 'Button',
//   type: 'button',
//   isDisable: false,
//   isBlock: false,
//   accessKey: '', 
// },
// backgroundColor:''
  
// });


// export const Small = () => ({
//   props: { label: 'Button',
//   type: 'button',
//   isDisable: false,
//   isBlock: false,
//   accessKey: '',
//   size: 'small',
// },
// backgroundColor:'',
// });




// export const Medium = () => ({
//   props: { label: 'Button',
//   type: 'button',
//   isDisable: false,
//   isBlock: false,
//   accessKey: '',
//   size: 'medium',
//   backgroundColor:'',
//   },
// });


// export const Medium = () => ({
//   props: { label: 'Button',
//   type: 'button',
//   isDisable: false,
//   isBlock: false,
//   accessKey: '',
//   size: 'medium',
//   backgroundColor:'red',
// },
// });



// export const Large = () => ({
//   props: { 
//   label: 'Button',
//   type: 'button',
//   isBlock: false,
//   accessKey: '',
//   backgroundColor:'',
//   size: 'large',
//   isDisable: false,
// },
// });


// export const isDisable = () => ({
//   props: { 
//   label: 'Button',
//   type: 'button',
//   isDisable: true,
//   isBlock: false,
//   // backgroundColor:'red',
// },
// });


// export const isBlock = () => ({
//   props: { 
//   label: 'Button',
//   type: 'button',
//   isDisable: false,
//   isBlock: true,
//   // backgroundColor:'red',
// },
// });




 
// export const isDisable = Template.bind({});
// isDisable.args = {
//   isDisable: true,
// };
 













 
 


 



  // type: 'button',
  // isDisable: false,
  // isBlock: false,
  // accessKey: '',
  // size: 'large',
  // label: 'Label',
  // btnStyleType:'primary'
  // backgroundColor : 'red'

  


// export const Primary = Template.bind({});
// Primary.args = {
//   type: 'button',
//   isDisable: false,
//   label: 'Label',
//   isBlock: false,
//   accessKey: '',

//   // backgroundColor : 'red'
//   // btnStyleType:'primary'
// };
