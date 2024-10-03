# ptg-modal



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description | Type      | Default          |
| ------------------- | --------------------- | ----------- | --------- | ---------------- |
| `btnName`           | `btn-name`            |             | `string`  | `'Open Modal'`   |
| `cancelBtn`         | `cancel-btn`          |             | `string`  | `'secondary'`    |
| `closeOutsideClick` | `close-outside-click` |             | `boolean` | `false`          |
| `confirmButtonName` | `confirm-button-name` |             | `string`  | `'Confirm'`      |
| `isOpen`            | `is-open`             |             | `boolean` | `false`          |
| `modalHeaderName`   | `modal-header-name`   |             | `string`  | `'Modal Header'` |
| `modalSize`         | `modal-size`          |             | `string`  | `'md'`           |
| `primaryBtn`        | `primary-btn`         |             | `string`  | `'primary'`      |
| `showFooter`        | `show-footer`         |             | `boolean` | `true`           |
| `showHeader`        | `show-header`         |             | `boolean` | `true`           |


## Events

| Event          | Description | Type                   |
| -------------- | ----------- | ---------------------- |
| `confirmClose` |             | `CustomEvent<boolean>` |
| `modalClose`   |             | `CustomEvent<boolean>` |


## Dependencies

### Depends on

- [ptg-button](../ptg-button)

### Graph
```mermaid
graph TD;
  ptg-modal --> ptg-button
  style ptg-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
