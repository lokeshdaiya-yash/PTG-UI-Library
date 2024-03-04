/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @used Used for navigation config
 **/

export const NavigationData = [
  {
    id: '1',
    path: '/accordian-example',
    icon: 'fa-solid fa-chevron-down',
    label: 'ACCORDIAN',
    disabled: false,
  },
  {
    id: '2',
    path: '/calendar',
    icon: 'fa-solid fa-calendar',
    label: 'CALENDER',
    disabled: false,
  },
  {
    id: '3',
    path: '/carousel',
    icon: 'fas fa-solid fa-slideshare',
    label: 'CAROUSEL',
    disabled: false,
  },

  // Charts routing
  {
    id: '4',
    label: 'CHARTS',
    icon: 'fas fa-chart-line',
    pages: [
      {
        label: 'D3 CHARTS',
        path: '/charts/d3-charts',
        id: 'd3-chart',
        disabled: false,
        parentId: '4',
      },
      {
        label: 'HIGH CHARTS',
        path: '/charts/high-charts',
        id: 'high-chart',
        disabled: false,
        parentId: '4',
      },
    ],
  },
  // Datatable routing
  {
    id: '5',
    label: 'DATA TABLE',
    icon: 'far fa-star',
    pages: [
      {
        label: 'AG GRID',
        path: '/datatable/ag-grid',
        id: 'ag-grid',
        disabled: false,
        parentId: '5',
      },
      {
        label: 'NGX DATATABLE',
        path: '/datatable/ngx-datatable',
        id: 'ngx-table',
        disabled: false,
        parentId: '5',
      },
      {
        label: 'MATERIAL',
        path: '/datatable/material-datatable',
        id: 'material',
        disabled: false,
        parentId: '5',
      },
    ],
  },
  {
    id: '6',
    path: '/dialog',
    icon: 'fas fa-window-maximize',
    label: 'DIALOG',
    disabled: false,
  },
  {
    id: '7',
    path: '/draganddrop',
    icon: 'fas fa-grip-vertical',
    label: 'DRAG AND DROP',
    disabled: false,
  },
  {
    id: '8',
    path: '/download',
    icon: 'fas fa-download',
    label: 'DOWNLOAD',
    disabled: false,
  },
  {
    id: '9',
    path: '/grid-layout',
    icon: 'fa-solid fa-border-all',
    label: 'GRID LAYOUT',
    disabled: false,
  },
  {
    id: '10',
    path: '/indeterminate-checkbox',
    icon: 'fas fa-square-check',
    label: 'INDETERMINATE',
    disabled: false,
  },
  {
    id: '11',
    path: '/pipes',
    icon: 'fa-solid fa-p',
    label: 'PIPES',
    disabled: false,
  },
  {
    id: '12',
    path: '/role',
    icon: 'fas fa-lock',
    label: 'ROLE BASED',
    disabled: false,
  },
  {
    id: '13',
    path: '/select',
    icon: 'fa-solid fa-check-to-slot',
    label: 'SELECT',
    disabled: false,
  },
  {
    id: '14',
    path: '/accessibility',
    icon: 'fa-solid fa-keyboard',
    label: 'WEB ACCESSIBILITY',
    disabled: false,
  },
  {
    id: '15',
    path: '/multistep-form',
    icon: 'fa-solid fa-file',
    label: 'MULTI FORMS',
    disabled: false,
  },
  {
    id: '15',
    path: '/card',
    icon: 'fa-regular fa-square',
    label: 'CARDS',
    disabled: false,
  },
  {
    id: '16',
    path: '/breadcrumbs',
    icon: 'fa fa-angle-double-right',
    label: 'BREADCRUMBS',
    disabled: false,
  },
];
