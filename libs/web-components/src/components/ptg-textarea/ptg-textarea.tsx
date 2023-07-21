import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptg-textarea',
  styleUrl: 'ptg-textarea.css',
  shadow: true,
})
export class PtgTextarea {

  @Prop() maxlen: number;
  @Prop() placeholder: string;
  @Prop() rows: number;
  @Prop() cols: number;
  @Prop() disable: boolean;
  @Prop() readonly: boolean;
  @Prop() required: boolean;
  @Prop() minlength: number;
  @Prop() value: string;
  @Prop() form: string;
  @Prop() autofocus: boolean;
  @Prop() name: string;
  @Prop() appearance: string;




  render() {


    return (
      <div>

        <textarea class={`textarea ${this.appearance} `}
          placeholder={this.placeholder}
          maxLength={this.maxlen}
          rows={this.rows}
          cols={this.cols}
          minLength={this.minlength}
          readOnly={this.readonly}
          required={this.required}
          value={this.value}
          form={this.form}
          autoFocus={this.autofocus}
          disabled={this.disable}></textarea>
      </div>


    );
  }

}
