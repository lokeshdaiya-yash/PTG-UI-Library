/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface PtgAccordion {
        "color": string;
        "description": string;
        "label": string;
        "width": string;
    }
    interface PtgAlert {
        "appreanced": string;
        "buttoncss": string;
        "texed": string;
    }
    interface PtgBreadcrumbs {
        "datalist": any;
    }
    interface PtgButton {
        "appearance": string;
        "text": string;
    }
    interface PtgCalender {
        "callback"?: (val: any) => void;
        "dayNames": string[];
        "monthNames": string[];
        "showFillDays": boolean;
        "startDate": any;
    }
    interface PtgCard {
        "cardButtonText": string;
        "cardContent": string;
        "cardContentLength"?: number;
        "cardId": number;
        "cardTitle": string;
        "isCardAction": boolean;
        "src": string;
    }
    interface PtgCheckbox {
        "callback"?: (val: any) => void;
        /**
          * The first name
         */
        "checked"?: boolean;
        "color"?: string;
        "dataid": any;
        "datavalue": any;
        "disabled"?: boolean;
        "indeterminate"?: boolean;
        "label"?: string;
    }
    interface PtgCircularDynamicProgressBar {
        "color": string;
        "fontSize": number;
        "progressEndValue": number;
        "size": number;
    }
    interface PtgFooter {
        "footer": string;
    }
    interface PtgHeader {
        "header": string;
    }
    interface PtgInput {
        /**
          * id for input
         */
        "inputId": string;
        /**
          * label for inout
         */
        "label": string;
        /**
          * name for inout
         */
        "name": string;
        /**
          * The placeholder
         */
        "placeholder": string;
        /**
          * type of input
         */
        "type": string;
        /**
          * name for inout
         */
        "value": string;
        "width": string;
    }
    interface PtgModal {
        "btnName": string;
        "closeOutsideClick": boolean;
        "confirmButtonName": string;
        "isOpen": boolean;
        "modalHeaderName": string;
        "modalSize": string;
        "showFooter": boolean;
        "showHeader": boolean;
    }
    interface PtgPagination {
        "itemCount": number;
        "page": number;
        "pageSize": number;
        "pageSizeOptions": number[];
    }
    interface PtgRadiobtn {
        "ids": string;
        "name": string;
        "sender": string;
        "type": string;
        "value": string;
    }
    interface PtgRadiobuton {
        "ids": string;
        "name": string;
        "sender": string;
        "type": string;
        "value": string;
    }
    interface PtgSelect {
        "multiSelect": boolean;
        "selectData": any;
    }
    interface PtgSidenav {
        "text": string;
        "url": string;
    }
    interface PtgSpinner {
        "appearance": string;
    }
    interface PtgTable {
        "customClass"?: string;
        "pageSizeOptions": number[];
        "searchable": boolean;
        "sortable": boolean;
        "tableHover"?: boolean;
        "tableStrip"?: boolean;
        "tablecolumn": any;
        "tabledata": any;
        "tabletitle": string;
        "themeColor"?: string;
    }
    interface PtgTextarea {
        "appearance": string;
        "autofocus": boolean;
        "cols": number;
        "disable": boolean;
        "form": string;
        "maxlen": number;
        "minlength": number;
        "name": string;
        "placeholder": string;
        "readonly": boolean;
        "required": boolean;
        "rows": number;
        "value": string;
    }
    interface PtgToast {
        "appearance": string;
        "discription": string;
        "id1": string;
        "open": boolean;
        "type": string;
    }
    interface PtgUiCarousel {
        "images": Array<string>;
        "imgHeight": string;
        "imgWidth": string;
        "showIndicators": boolean;
    }
    interface PtgUiCircularProgressBar {
        "fontSize": number;
        "progressAmount": string;
        "progressColor": string;
        "size": number;
    }
    interface PtgUiConditionalCircularProgressBar {
        "fontSize": number;
        "progressAmount": string;
        "size": number;
    }
    interface PtgUiConditionalProgressBar {
        "value": number;
        "width": number;
    }
    interface PtgUiProgressBar {
        "color": string;
        "value": number;
        "width": number;
    }
    interface PtgUiProgressBarFive {
        "progressValue": number;
        "width": number;
    }
    interface PtgUiProgressBarFour {
        "width": number;
    }
    interface PtgUiProgressGradientBar {
        "value": number;
        "width": number;
    }
}
export interface PtgCalenderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPtgCalenderElement;
}
export interface PtgCardCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPtgCardElement;
}
export interface PtgCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPtgCheckboxElement;
}
export interface PtgInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPtgInputElement;
}
export interface PtgModalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPtgModalElement;
}
export interface PtgPaginationCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPtgPaginationElement;
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPtgAccordionElement extends Components.PtgAccordion, HTMLStencilElement {
    }
    var HTMLPtgAccordionElement: {
        prototype: HTMLPtgAccordionElement;
        new (): HTMLPtgAccordionElement;
    };
    interface HTMLPtgAlertElement extends Components.PtgAlert, HTMLStencilElement {
    }
    var HTMLPtgAlertElement: {
        prototype: HTMLPtgAlertElement;
        new (): HTMLPtgAlertElement;
    };
    interface HTMLPtgBreadcrumbsElement extends Components.PtgBreadcrumbs, HTMLStencilElement {
    }
    var HTMLPtgBreadcrumbsElement: {
        prototype: HTMLPtgBreadcrumbsElement;
        new (): HTMLPtgBreadcrumbsElement;
    };
    interface HTMLPtgButtonElement extends Components.PtgButton, HTMLStencilElement {
    }
    var HTMLPtgButtonElement: {
        prototype: HTMLPtgButtonElement;
        new (): HTMLPtgButtonElement;
    };
    interface HTMLPtgCalenderElement extends Components.PtgCalender, HTMLStencilElement {
    }
    var HTMLPtgCalenderElement: {
        prototype: HTMLPtgCalenderElement;
        new (): HTMLPtgCalenderElement;
    };
    interface HTMLPtgCardElement extends Components.PtgCard, HTMLStencilElement {
    }
    var HTMLPtgCardElement: {
        prototype: HTMLPtgCardElement;
        new (): HTMLPtgCardElement;
    };
    interface HTMLPtgCheckboxElement extends Components.PtgCheckbox, HTMLStencilElement {
    }
    var HTMLPtgCheckboxElement: {
        prototype: HTMLPtgCheckboxElement;
        new (): HTMLPtgCheckboxElement;
    };
    interface HTMLPtgCircularDynamicProgressBarElement extends Components.PtgCircularDynamicProgressBar, HTMLStencilElement {
    }
    var HTMLPtgCircularDynamicProgressBarElement: {
        prototype: HTMLPtgCircularDynamicProgressBarElement;
        new (): HTMLPtgCircularDynamicProgressBarElement;
    };
    interface HTMLPtgFooterElement extends Components.PtgFooter, HTMLStencilElement {
    }
    var HTMLPtgFooterElement: {
        prototype: HTMLPtgFooterElement;
        new (): HTMLPtgFooterElement;
    };
    interface HTMLPtgHeaderElement extends Components.PtgHeader, HTMLStencilElement {
    }
    var HTMLPtgHeaderElement: {
        prototype: HTMLPtgHeaderElement;
        new (): HTMLPtgHeaderElement;
    };
    interface HTMLPtgInputElement extends Components.PtgInput, HTMLStencilElement {
    }
    var HTMLPtgInputElement: {
        prototype: HTMLPtgInputElement;
        new (): HTMLPtgInputElement;
    };
    interface HTMLPtgModalElement extends Components.PtgModal, HTMLStencilElement {
    }
    var HTMLPtgModalElement: {
        prototype: HTMLPtgModalElement;
        new (): HTMLPtgModalElement;
    };
    interface HTMLPtgPaginationElement extends Components.PtgPagination, HTMLStencilElement {
    }
    var HTMLPtgPaginationElement: {
        prototype: HTMLPtgPaginationElement;
        new (): HTMLPtgPaginationElement;
    };
    interface HTMLPtgRadiobtnElement extends Components.PtgRadiobtn, HTMLStencilElement {
    }
    var HTMLPtgRadiobtnElement: {
        prototype: HTMLPtgRadiobtnElement;
        new (): HTMLPtgRadiobtnElement;
    };
    interface HTMLPtgRadiobutonElement extends Components.PtgRadiobuton, HTMLStencilElement {
    }
    var HTMLPtgRadiobutonElement: {
        prototype: HTMLPtgRadiobutonElement;
        new (): HTMLPtgRadiobutonElement;
    };
    interface HTMLPtgSelectElement extends Components.PtgSelect, HTMLStencilElement {
    }
    var HTMLPtgSelectElement: {
        prototype: HTMLPtgSelectElement;
        new (): HTMLPtgSelectElement;
    };
    interface HTMLPtgSidenavElement extends Components.PtgSidenav, HTMLStencilElement {
    }
    var HTMLPtgSidenavElement: {
        prototype: HTMLPtgSidenavElement;
        new (): HTMLPtgSidenavElement;
    };
    interface HTMLPtgSpinnerElement extends Components.PtgSpinner, HTMLStencilElement {
    }
    var HTMLPtgSpinnerElement: {
        prototype: HTMLPtgSpinnerElement;
        new (): HTMLPtgSpinnerElement;
    };
    interface HTMLPtgTableElement extends Components.PtgTable, HTMLStencilElement {
    }
    var HTMLPtgTableElement: {
        prototype: HTMLPtgTableElement;
        new (): HTMLPtgTableElement;
    };
    interface HTMLPtgTextareaElement extends Components.PtgTextarea, HTMLStencilElement {
    }
    var HTMLPtgTextareaElement: {
        prototype: HTMLPtgTextareaElement;
        new (): HTMLPtgTextareaElement;
    };
    interface HTMLPtgToastElement extends Components.PtgToast, HTMLStencilElement {
    }
    var HTMLPtgToastElement: {
        prototype: HTMLPtgToastElement;
        new (): HTMLPtgToastElement;
    };
    interface HTMLPtgUiCarouselElement extends Components.PtgUiCarousel, HTMLStencilElement {
    }
    var HTMLPtgUiCarouselElement: {
        prototype: HTMLPtgUiCarouselElement;
        new (): HTMLPtgUiCarouselElement;
    };
    interface HTMLPtgUiCircularProgressBarElement extends Components.PtgUiCircularProgressBar, HTMLStencilElement {
    }
    var HTMLPtgUiCircularProgressBarElement: {
        prototype: HTMLPtgUiCircularProgressBarElement;
        new (): HTMLPtgUiCircularProgressBarElement;
    };
    interface HTMLPtgUiConditionalCircularProgressBarElement extends Components.PtgUiConditionalCircularProgressBar, HTMLStencilElement {
    }
    var HTMLPtgUiConditionalCircularProgressBarElement: {
        prototype: HTMLPtgUiConditionalCircularProgressBarElement;
        new (): HTMLPtgUiConditionalCircularProgressBarElement;
    };
    interface HTMLPtgUiConditionalProgressBarElement extends Components.PtgUiConditionalProgressBar, HTMLStencilElement {
    }
    var HTMLPtgUiConditionalProgressBarElement: {
        prototype: HTMLPtgUiConditionalProgressBarElement;
        new (): HTMLPtgUiConditionalProgressBarElement;
    };
    interface HTMLPtgUiProgressBarElement extends Components.PtgUiProgressBar, HTMLStencilElement {
    }
    var HTMLPtgUiProgressBarElement: {
        prototype: HTMLPtgUiProgressBarElement;
        new (): HTMLPtgUiProgressBarElement;
    };
    interface HTMLPtgUiProgressBarFiveElement extends Components.PtgUiProgressBarFive, HTMLStencilElement {
    }
    var HTMLPtgUiProgressBarFiveElement: {
        prototype: HTMLPtgUiProgressBarFiveElement;
        new (): HTMLPtgUiProgressBarFiveElement;
    };
    interface HTMLPtgUiProgressBarFourElement extends Components.PtgUiProgressBarFour, HTMLStencilElement {
    }
    var HTMLPtgUiProgressBarFourElement: {
        prototype: HTMLPtgUiProgressBarFourElement;
        new (): HTMLPtgUiProgressBarFourElement;
    };
    interface HTMLPtgUiProgressGradientBarElement extends Components.PtgUiProgressGradientBar, HTMLStencilElement {
    }
    var HTMLPtgUiProgressGradientBarElement: {
        prototype: HTMLPtgUiProgressGradientBarElement;
        new (): HTMLPtgUiProgressGradientBarElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "ptg-accordion": HTMLPtgAccordionElement;
        "ptg-alert": HTMLPtgAlertElement;
        "ptg-breadcrumbs": HTMLPtgBreadcrumbsElement;
        "ptg-button": HTMLPtgButtonElement;
        "ptg-calender": HTMLPtgCalenderElement;
        "ptg-card": HTMLPtgCardElement;
        "ptg-checkbox": HTMLPtgCheckboxElement;
        "ptg-circular-dynamic-progress-bar": HTMLPtgCircularDynamicProgressBarElement;
        "ptg-footer": HTMLPtgFooterElement;
        "ptg-header": HTMLPtgHeaderElement;
        "ptg-input": HTMLPtgInputElement;
        "ptg-modal": HTMLPtgModalElement;
        "ptg-pagination": HTMLPtgPaginationElement;
        "ptg-radiobtn": HTMLPtgRadiobtnElement;
        "ptg-radiobuton": HTMLPtgRadiobutonElement;
        "ptg-select": HTMLPtgSelectElement;
        "ptg-sidenav": HTMLPtgSidenavElement;
        "ptg-spinner": HTMLPtgSpinnerElement;
        "ptg-table": HTMLPtgTableElement;
        "ptg-textarea": HTMLPtgTextareaElement;
        "ptg-toast": HTMLPtgToastElement;
        "ptg-ui-carousel": HTMLPtgUiCarouselElement;
        "ptg-ui-circular-progress-bar": HTMLPtgUiCircularProgressBarElement;
        "ptg-ui-conditional-circular-progress-bar": HTMLPtgUiConditionalCircularProgressBarElement;
        "ptg-ui-conditional-progress-bar": HTMLPtgUiConditionalProgressBarElement;
        "ptg-ui-progress-bar": HTMLPtgUiProgressBarElement;
        "ptg-ui-progress-bar-five": HTMLPtgUiProgressBarFiveElement;
        "ptg-ui-progress-bar-four": HTMLPtgUiProgressBarFourElement;
        "ptg-ui-progress-gradient-bar": HTMLPtgUiProgressGradientBarElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface PtgAccordion {
        "color"?: string;
        "description"?: string;
        "label"?: string;
        "width"?: string;
    }
    interface PtgAlert {
        "appreanced"?: string;
        "buttoncss"?: string;
        "texed"?: string;
    }
    interface PtgBreadcrumbs {
        "datalist"?: any;
    }
    interface PtgButton {
        "appearance"?: string;
        "text"?: string;
    }
    interface PtgCalender {
        "callback"?: (val: any) => void;
        "dayNames"?: string[];
        "monthNames"?: string[];
        "onDayChanged"?: (event: PtgCalenderCustomEvent<any>) => void;
        "onMonthChanged"?: (event: PtgCalenderCustomEvent<any>) => void;
        "showFillDays"?: boolean;
        "startDate"?: any;
    }
    interface PtgCard {
        "cardButtonText"?: string;
        "cardContent"?: string;
        "cardContentLength"?: number;
        "cardId"?: number;
        "cardTitle"?: string;
        "isCardAction"?: boolean;
        "onHandleClick"?: (event: PtgCardCustomEvent<any>) => void;
        "src"?: string;
    }
    interface PtgCheckbox {
        "callback"?: (val: any) => void;
        /**
          * The first name
         */
        "checked"?: boolean;
        "color"?: string;
        "dataid"?: any;
        "datavalue"?: any;
        "disabled"?: boolean;
        "indeterminate"?: boolean;
        "label"?: string;
        "onValueChanged"?: (event: PtgCheckboxCustomEvent<string>) => void;
    }
    interface PtgCircularDynamicProgressBar {
        "color"?: string;
        "fontSize"?: number;
        "progressEndValue"?: number;
        "size"?: number;
    }
    interface PtgFooter {
        "footer"?: string;
    }
    interface PtgHeader {
        "header"?: string;
    }
    interface PtgInput {
        /**
          * id for input
         */
        "inputId"?: string;
        /**
          * label for inout
         */
        "label"?: string;
        /**
          * name for inout
         */
        "name"?: string;
        /**
          * Event emmiter to handle changes
         */
        "onValueChanged"?: (event: PtgInputCustomEvent<string>) => void;
        /**
          * The placeholder
         */
        "placeholder"?: string;
        /**
          * type of input
         */
        "type"?: string;
        /**
          * name for inout
         */
        "value"?: string;
        "width"?: string;
    }
    interface PtgModal {
        "btnName"?: string;
        "closeOutsideClick"?: boolean;
        "confirmButtonName"?: string;
        "isOpen"?: boolean;
        "modalHeaderName"?: string;
        "modalSize"?: string;
        "onConfirmClose"?: (event: PtgModalCustomEvent<boolean>) => void;
        "onModalClose"?: (event: PtgModalCustomEvent<boolean>) => void;
        "showFooter"?: boolean;
        "showHeader"?: boolean;
    }
    interface PtgPagination {
        "itemCount"?: number;
        "onPageChanged"?: (event: PtgPaginationCustomEvent<any>) => void;
        "onSizeChanged"?: (event: PtgPaginationCustomEvent<any>) => void;
        "page"?: number;
        "pageSize"?: number;
        "pageSizeOptions"?: number[];
    }
    interface PtgRadiobtn {
        "ids"?: string;
        "name"?: string;
        "sender"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface PtgRadiobuton {
        "ids"?: string;
        "name"?: string;
        "sender"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface PtgSelect {
        "multiSelect"?: boolean;
        "selectData"?: any;
    }
    interface PtgSidenav {
        "text"?: string;
        "url"?: string;
    }
    interface PtgSpinner {
        "appearance"?: string;
    }
    interface PtgTable {
        "customClass"?: string;
        "pageSizeOptions"?: number[];
        "searchable"?: boolean;
        "sortable"?: boolean;
        "tableHover"?: boolean;
        "tableStrip"?: boolean;
        "tablecolumn"?: any;
        "tabledata"?: any;
        "tabletitle"?: string;
        "themeColor"?: string;
    }
    interface PtgTextarea {
        "appearance"?: string;
        "autofocus"?: boolean;
        "cols"?: number;
        "disable"?: boolean;
        "form"?: string;
        "maxlen"?: number;
        "minlength"?: number;
        "name"?: string;
        "placeholder"?: string;
        "readonly"?: boolean;
        "required"?: boolean;
        "rows"?: number;
        "value"?: string;
    }
    interface PtgToast {
        "appearance"?: string;
        "discription"?: string;
        "id1"?: string;
        "open"?: boolean;
        "type"?: string;
    }
    interface PtgUiCarousel {
        "images"?: Array<string>;
        "imgHeight"?: string;
        "imgWidth"?: string;
        "showIndicators"?: boolean;
    }
    interface PtgUiCircularProgressBar {
        "fontSize"?: number;
        "progressAmount"?: string;
        "progressColor"?: string;
        "size"?: number;
    }
    interface PtgUiConditionalCircularProgressBar {
        "fontSize"?: number;
        "progressAmount"?: string;
        "size"?: number;
    }
    interface PtgUiConditionalProgressBar {
        "value"?: number;
        "width"?: number;
    }
    interface PtgUiProgressBar {
        "color"?: string;
        "value"?: number;
        "width"?: number;
    }
    interface PtgUiProgressBarFive {
        "progressValue"?: number;
        "width"?: number;
    }
    interface PtgUiProgressBarFour {
        "width"?: number;
    }
    interface PtgUiProgressGradientBar {
        "value"?: number;
        "width"?: number;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "ptg-accordion": PtgAccordion;
        "ptg-alert": PtgAlert;
        "ptg-breadcrumbs": PtgBreadcrumbs;
        "ptg-button": PtgButton;
        "ptg-calender": PtgCalender;
        "ptg-card": PtgCard;
        "ptg-checkbox": PtgCheckbox;
        "ptg-circular-dynamic-progress-bar": PtgCircularDynamicProgressBar;
        "ptg-footer": PtgFooter;
        "ptg-header": PtgHeader;
        "ptg-input": PtgInput;
        "ptg-modal": PtgModal;
        "ptg-pagination": PtgPagination;
        "ptg-radiobtn": PtgRadiobtn;
        "ptg-radiobuton": PtgRadiobuton;
        "ptg-select": PtgSelect;
        "ptg-sidenav": PtgSidenav;
        "ptg-spinner": PtgSpinner;
        "ptg-table": PtgTable;
        "ptg-textarea": PtgTextarea;
        "ptg-toast": PtgToast;
        "ptg-ui-carousel": PtgUiCarousel;
        "ptg-ui-circular-progress-bar": PtgUiCircularProgressBar;
        "ptg-ui-conditional-circular-progress-bar": PtgUiConditionalCircularProgressBar;
        "ptg-ui-conditional-progress-bar": PtgUiConditionalProgressBar;
        "ptg-ui-progress-bar": PtgUiProgressBar;
        "ptg-ui-progress-bar-five": PtgUiProgressBarFive;
        "ptg-ui-progress-bar-four": PtgUiProgressBarFour;
        "ptg-ui-progress-gradient-bar": PtgUiProgressGradientBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "ptg-accordion": LocalJSX.PtgAccordion & JSXBase.HTMLAttributes<HTMLPtgAccordionElement>;
            "ptg-alert": LocalJSX.PtgAlert & JSXBase.HTMLAttributes<HTMLPtgAlertElement>;
            "ptg-breadcrumbs": LocalJSX.PtgBreadcrumbs & JSXBase.HTMLAttributes<HTMLPtgBreadcrumbsElement>;
            "ptg-button": LocalJSX.PtgButton & JSXBase.HTMLAttributes<HTMLPtgButtonElement>;
            "ptg-calender": LocalJSX.PtgCalender & JSXBase.HTMLAttributes<HTMLPtgCalenderElement>;
            "ptg-card": LocalJSX.PtgCard & JSXBase.HTMLAttributes<HTMLPtgCardElement>;
            "ptg-checkbox": LocalJSX.PtgCheckbox & JSXBase.HTMLAttributes<HTMLPtgCheckboxElement>;
            "ptg-circular-dynamic-progress-bar": LocalJSX.PtgCircularDynamicProgressBar & JSXBase.HTMLAttributes<HTMLPtgCircularDynamicProgressBarElement>;
            "ptg-footer": LocalJSX.PtgFooter & JSXBase.HTMLAttributes<HTMLPtgFooterElement>;
            "ptg-header": LocalJSX.PtgHeader & JSXBase.HTMLAttributes<HTMLPtgHeaderElement>;
            "ptg-input": LocalJSX.PtgInput & JSXBase.HTMLAttributes<HTMLPtgInputElement>;
            "ptg-modal": LocalJSX.PtgModal & JSXBase.HTMLAttributes<HTMLPtgModalElement>;
            "ptg-pagination": LocalJSX.PtgPagination & JSXBase.HTMLAttributes<HTMLPtgPaginationElement>;
            "ptg-radiobtn": LocalJSX.PtgRadiobtn & JSXBase.HTMLAttributes<HTMLPtgRadiobtnElement>;
            "ptg-radiobuton": LocalJSX.PtgRadiobuton & JSXBase.HTMLAttributes<HTMLPtgRadiobutonElement>;
            "ptg-select": LocalJSX.PtgSelect & JSXBase.HTMLAttributes<HTMLPtgSelectElement>;
            "ptg-sidenav": LocalJSX.PtgSidenav & JSXBase.HTMLAttributes<HTMLPtgSidenavElement>;
            "ptg-spinner": LocalJSX.PtgSpinner & JSXBase.HTMLAttributes<HTMLPtgSpinnerElement>;
            "ptg-table": LocalJSX.PtgTable & JSXBase.HTMLAttributes<HTMLPtgTableElement>;
            "ptg-textarea": LocalJSX.PtgTextarea & JSXBase.HTMLAttributes<HTMLPtgTextareaElement>;
            "ptg-toast": LocalJSX.PtgToast & JSXBase.HTMLAttributes<HTMLPtgToastElement>;
            "ptg-ui-carousel": LocalJSX.PtgUiCarousel & JSXBase.HTMLAttributes<HTMLPtgUiCarouselElement>;
            "ptg-ui-circular-progress-bar": LocalJSX.PtgUiCircularProgressBar & JSXBase.HTMLAttributes<HTMLPtgUiCircularProgressBarElement>;
            "ptg-ui-conditional-circular-progress-bar": LocalJSX.PtgUiConditionalCircularProgressBar & JSXBase.HTMLAttributes<HTMLPtgUiConditionalCircularProgressBarElement>;
            "ptg-ui-conditional-progress-bar": LocalJSX.PtgUiConditionalProgressBar & JSXBase.HTMLAttributes<HTMLPtgUiConditionalProgressBarElement>;
            "ptg-ui-progress-bar": LocalJSX.PtgUiProgressBar & JSXBase.HTMLAttributes<HTMLPtgUiProgressBarElement>;
            "ptg-ui-progress-bar-five": LocalJSX.PtgUiProgressBarFive & JSXBase.HTMLAttributes<HTMLPtgUiProgressBarFiveElement>;
            "ptg-ui-progress-bar-four": LocalJSX.PtgUiProgressBarFour & JSXBase.HTMLAttributes<HTMLPtgUiProgressBarFourElement>;
            "ptg-ui-progress-gradient-bar": LocalJSX.PtgUiProgressGradientBar & JSXBase.HTMLAttributes<HTMLPtgUiProgressGradientBarElement>;
        }
    }
}
