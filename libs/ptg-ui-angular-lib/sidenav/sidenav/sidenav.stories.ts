import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SidenavComponent } from './sidenav.component';
import {SidenavModule} from '../sidenav.module'


const NavigationData = [
  {
    id:"1",
    path: '/calendar',
    // icon: 'home-icon',
    icon: 'fa-solid fa-calendar',
    label: 'CALENDER',
    disabled: false,
  },
  
  // Charts routing 
  {
    id:"2",
    label: 'CHARTS',
    icon: 'fas fa-chart-line',
    pages: [
      {
        label: 'D3_CHARTS',
        path: '/charts/d3-charts',
        id: 'd3-chart',
        disabled: false,
        parentId:"2"
      },
      {
        label: 'HIGH_CHARTS',
        path: '/charts/high-charts',
        id: 'high-chart',
        disabled: false,
        parentId:"2"
      }
    ],
  },
  // Datatable routing 
  {
    id:"3",
    label: 'DATA_TABLE',
    icon: 'far fa-star',
    pages: [
      {
        label: 'AG_GRID',
        path: '/datatable/ag-grid',
        id: 'ag-grid',
        disabled: false,
        parentId:"3"
      },
      {
        label: 'NGX_DATATABLE',
        path: '/datatable/ngx-datatable',
        id: 'ngx-table',
        disabled: false,
        parentId:"3"
      },
      {
        label: 'MATERIAL',
        path: '/datatable/material-datatable',
        id: 'material',
        disabled:false,
        parentId:"3"
      },
    ],
  },
  {
    id:"4",
    path: '/draganddrop',
    icon: 'fas fa-grip-vertical',
    label: 'DRAG_AND_DROP',
    disabled: false,
  },
  {
    id:"5",
    path: '/download',
    icon: 'fas fa-download',
    label: 'DOWNLOAD',
    disabled: false,
  },
  {
    id:"6",
    path: '/grid-layout',
    icon: 'fa-solid fa-border-all',
    label: 'GRID_LAYOUT',
    disabled: false,
  },
  {
    id:"7",
    path: '/indeterminate-checkbox',
    icon: 'fas fa-square-check',
    label: 'INDETETERMINATE',
    disabled: false,
  },
  {
    id:"8",
    path: '/pipes',
    icon: 'fa-solid fa-p',
    label: 'PIPES',
    disabled: false,
  },
  {
    id:"9",
    path: '/role',
    icon: 'fas fa-lock',
    label: 'ROLE_BASED',
    disabled: false,
  },
  {
    id:"10",
    path: '/select',
    // icon: 'home-icon',
    icon: 'fa-solid fa-check-to-slot',
    label: 'SELECT',
    disabled: false,
  }, 
  {
    id:"11",
    path: '/accessibility',
    // icon: 'home-icon',
    icon: 'fa-solid fa-keyboard',
    label: 'WEB_ACCESSIBILITY',
    disabled: false,
  }, 
  {
    id:"12",
    path: '/multistep-form',
    // icon: 'home-icon',
    icon: 'fa-solid fa-file',
    label: 'MULTI_FORMS',
    disabled: false,
  }, 
  {
    id:"13",
    label: 'DATA_TABLE',
    icon: 'far fa-star',
    pages: [
      {
        label: 'AG_GRID',
        path: '/datatable/ag-grid',
        id: 'ag-grid',
        disabled: false,
        parentId:"13"
      },
      {
        label: 'NGX_DATATABLE',
        path: '/datatable/ngx-datatable',
        id: 'ngx-table',
        disabled: false,
        parentId:"13"
      },
      {
        label: 'MATERIAL',
        path: '/datatable/material-datatable',
        id: 'material',
        disabled:false,
        parentId:"13"
      },
    ],
  },
];


export default {
  title: 'Component/SidenavComponent',
  component: SidenavComponent,
  
  decorators: [
    moduleMetadata({
      imports: [SidenavModule],
    }),
  ],
} as Meta<SidenavComponent>;

const Template: Story<SidenavComponent> = (args: SidenavComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  menuItems:NavigationData,
  isMenuOpen: false,
};


export const isMenuOpen = Template.bind({});
isMenuOpen.args = {
  menuItems:NavigationData,
  isMenuOpen: false,
};