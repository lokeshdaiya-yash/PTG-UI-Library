import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptg-input',
  styleUrl: 'ptg-input.scss',
  shadow: true,
})
export class PtgInput {
  /**
   * type of input
   */
  @Prop() type: string;

  /**
   * id for input
   */
  @Prop() inputId: string;

  /**
   * label for inout
   */
  @Prop() label: string;

  /**
   * The placeholder
   */
  @Prop() placeholder = '';

  /**
   * name for inout
   */
  @Prop() name: string;

  /**
   * name for inout
   */
  @Prop() value = '';

  /**
   * Event emmiter to handle changes
   */

  @Event() valueChanged: EventEmitter<string>;
  /*
   * width of inout value
   */
  @Prop() width = '100%';

  changeHandler(event: any) {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChanged.emit(this.value);
  }

  render() {
    return (
      <div>
        <label htmlFor={this.inputId}>{this.label}</label>
        <input
          type={this.type}
          id={this.inputId}
          name={this.name}
          placeholder={this.placeholder}
          onInput={this.changeHandler.bind(this)}
        ></input>
      </div>
    );
  }
}
