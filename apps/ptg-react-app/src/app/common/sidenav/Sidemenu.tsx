/**
 * @since March 2022
 * @author Sunil Bhawsar
 * @desc Side bar/navigation list
*/
{/*--List of sidebar/side navigation--*/}


export const NavigationData = [
  {
    path: '/accordian',
    icon: 'fa fa-lock',
    label: 'Accordion',
    disabled: false,
  },
  {
    path: '/breadcrumbs',
    icon: 'fa fa-link',
    label: 'BREADCRUMBS',
    disabled: false,
  },
  {
    path: '/button',
    icon: 'fa-solid fa-mobile-button',
    label: 'Buttons',
    disabled: false,
  },
  {
    path: '/calendar',
    icon: 'fa-solid fa-calendar',
    label: 'CALENDAR',
    disabled: false,
  },
  {
    path: '/cards',
    icon: 'fa fa-square',
    label: 'CARDS',
    disabled: false,
  },
  {
    path: '/carousel',
    icon: 'fa fa-lock',
    label: 'Carousel',
    disabled: false,
  },
 {
    label: 'CHARTS',
    icon: 'fas fa-chart-line',
    pages: [
      {
        label: 'D3 CHARTS',
        path: '/d3charts',
        icon: 'fa-solid fa-chart-simple',
        id: 'd3charts',
        disabled: false,
      },
      {
        label: 'HIGHCHARTS',
        path: '/highcharts',
        icon: 'fa-solid fa-chart-simple',
        id: 'highchart',
        disabled: false,
      }
    ],
  },
  {
    label: 'DATA TABLE',
    icon: 'fa fa-table',
    pages: [
      {
        label: 'AG GRID',
        path: '/datatable/aggrid',
        id: 'Ag-grid',
        icon: 'fa-solid fa-table-list',
        disabled: false,
      },
      {
        label: 'REACT DATA GRID',
        path: '/datatable/reactdatagrid',
        icon: 'fa-solid fa-table-list',
        id: 'Ngx-table',
        disabled: false,
      },
      {
        label: 'MATERIAL',
        path: '/datatable/materialTable',
        icon: 'fa-solid fa-table-list',
        id: 'Material',
        disabled: false,
      },
            {
        label: 'REACT TABLE',
        path: '/datatable/reactTable',
        icon: 'fa-solid fa-table-list',
        id: 'react-table',
        disabled: false,
      },
    ],
  },
  {
    path: '/dialog',
    icon: 'fa fa-th',
    label: 'Dialog',
    disabled: false,
  },
  {
    path: '/dragnDrop',
    icon: 'fa fa-bars',
    label: 'DRAG N DROP',
    disabled: false,
  },
  {
    path: '/downloadFile',
    icon: 'fa-solid fa-download',
    label: 'DOWNLOAD',
    disabled: false,
  },
  {
    path: '/gridLayout',
    icon: 'fa-solid fa-th',
    label: 'GRID LAYOUT',
    disabled: false,
  },
  {
    path: '/indeterminate',
    icon: 'fa-solid fa-check-square',
    label: 'INDETERMINATE',
    disabled: false,
  },
  {
    path: '/multistep',
    icon: 'fa fa-brands fa-wpforms',
    label: 'MULTI_STEP_FORM_NAV',
    disabled: false,
  },
  {
    path: '/pipes',
    icon: 'fa fa-solid fa-filter',
    label: 'PIPES & FILTERS',
    disabled: false,
  },
  {
    path: '/roleBased',
    icon: 'fa fa-lock',
    label: 'ROLE BASED',
    disabled: false,
  },
  {
    path: '/select',
    icon: 'fa-solid fa-check-to-slot',
    label: 'SELECT',
    disabled: false,
  },
  {
    path: '/webAccessibility',
    icon: 'fa fa-lock',
    label: 'WEB ACCESSIBILTY',
    disabled: false,
  },
  {
    path: '/toaster',
    icon: 'fa fa-lock',
    label: 'Toaster',
    disabled: false,
  }

];  
