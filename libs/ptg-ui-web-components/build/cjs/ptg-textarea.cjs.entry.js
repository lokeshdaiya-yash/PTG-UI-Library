'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cd8d96f6.js');

const ptgTextareaCss = "*{margin:0;padding:0;box-sizing:border-box;font-family:\"Poppins\", sans-serif}body{display:flex;align-items:center;justify-content:center;min-height:100vh;background:linear-gradient(#46ea9e, #AC34E7)}::selection{color:#fff;background:#4671EA}textarea{background-color:#dddddd;color:#666666;padding:1em;border-radius:10px;border:2px solid transparent;outline:none;font-family:\"Heebo\", sans-serif;font-weight:500;font-size:16px;line-height:1.2;transition:all 0.2s;height:fit-content;width:fit-content;overflow:auto}textarea:hover{cursor:pointer;background-color:#eeeeee}textarea:focus{cursor:text;color:#333333;background-color:white;border:2px solid darkgray;box-shadow:0px 0px 20px darkgray}.primary{background-color:white;color:black;padding:1em;border-radius:10px;border:2px solid #0062cc;outline:none;font-family:\"Heebo\", sans-serif;font-weight:500;font-size:16px;line-height:1.2;transition:all 0.2s}.primary:focus{cursor:text;color:black;background-color:white;border:2px solid #0062cc;box-shadow:0px 0px 20px  #0062cc}.secondary{background-color:white;color:black;padding:1em;border-radius:10px;border:2px solid #6c757d;outline:none;font-family:\"Heebo\", sans-serif;font-weight:500;font-size:16px;line-height:1.2;transition:all 0.2s}.secondary:focus{cursor:text;color:black;background-color:white;border:2px solid #6c757d;box-shadow:0px 0px 20px #6c757d}.success{background-color:white;color:black;padding:1em;border-radius:10px;border:2px solid #28a745;outline:none;font-family:\"Heebo\", sans-serif;font-weight:500;font-size:16px;line-height:1.2;transition:all 0.2s}.success:focus{cursor:text;color:black;background-color:white;border:2px solid #28a745;box-shadow:0px 0px 20px #28a745}.warning{background-color:white;color:black;padding:1em;border-radius:10px;border:2px solid #ffc107;outline:none;font-family:\"Heebo\", sans-serif;font-weight:500;font-size:16px;line-height:1.2;transition:all 0.2s}.warning:focus{cursor:text;color:black;background-color:white;border:2px solid #ffc107;box-shadow:0px 0px 20px #ffc107}.danger{background-color:white;color:black;padding:1em;border-radius:10px;border:2px solid #dc3545;outline:none;font-family:\"Heebo\", sans-serif;font-weight:500;font-size:16px;line-height:1.2;transition:all 0.2s}.danger:focus{cursor:text;color:black;background-color:white;border:2px solid #dc3545;box-shadow:0px 0px 20px #dc3545}.container{margin-top:4%;margin-left:30%;padding:10px;width:310px;border:1px solid #ededed;-moz-box-shadow:0px 0px 5px 1px rgba(0, 0, 0, 0.03);-webkit-box-shadow:0px 0px 5px 1px rgba(0, 0, 0, 0.03);box-shadow:0px 0px 5px 1px rgba(0, 0, 0, 0.03)}label.labels{font-weight:600;font-size:12px;color:#6B6B6B}textarea::-webkit-scrollbar{width:2px}textarea::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 10px #BDDAE0;box-shadow:inset 0 0 10px #BDDAE0}textarea::-webkit-scrollbar-thumb{background-color:#090909}";

const PtgTextarea = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.maxlen = undefined;
    this.placeholder = undefined;
    this.rows = undefined;
    this.cols = undefined;
    this.disable = undefined;
    this.readonly = undefined;
    this.required = undefined;
    this.minlength = undefined;
    this.value = undefined;
    this.form = undefined;
    this.autofocus = undefined;
    this.name = undefined;
    this.appearance = undefined;
  }
  render() {
    return (index.h("div", null, index.h("textarea", { class: `textarea ${this.appearance} `, placeholder: this.placeholder, maxLength: this.maxlen, rows: this.rows, cols: this.cols, minLength: this.minlength, readOnly: this.readonly, required: this.required, value: this.value, form: this.form, autoFocus: this.autofocus, disabled: this.disable })));
  }
};
PtgTextarea.style = ptgTextareaCss;

exports.ptg_textarea = PtgTextarea;
