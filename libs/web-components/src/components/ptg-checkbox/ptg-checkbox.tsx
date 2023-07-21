import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ptg-checkbox',
  styleUrl: 'ptg-checkbox.scss',
  shadow: true,
})
export class PtgCheckbox {
  /**
   * The first name
   */
  @Prop({ mutable: true }) checked?: boolean;
  @Prop() label?: string;
  @Prop() color?: string;
  @Prop({ mutable: true }) disabled?: boolean;
  @Prop() datavalue: any;
  @Prop() dataid: any;
  @Prop() callback?: (val: any) => void;
  @Prop({ mutable: true }) indeterminate?: boolean = false;
  @Event() valueChanged: EventEmitter<string>;
  private onInputChangeValue(event: Event) {
    this.datavalue = (event.target as HTMLInputElement).value;
    this.valueChanged.emit(this.datavalue);
    this?.callback && this?.callback(event);
  }
  render() {
    return (
      <div
        class={{
          'ptg-checkbox-wrapper': true,
          [`ptg-${this.color}`]: !!this.color,
        }}
      >
        <input
          type="checkbox"
          class="ptg-checkbox"
          indeterminate={this.indeterminate}
          onInput={this.onInputChangeValue.bind(this)}
          id={this.dataid}
          value={this.datavalue}
          disabled={this.disabled}
          checked={this.checked}
        />
        {this.label && <label htmlFor={this.dataid}>{this.label}</label>}
      </div>
    );
  }
}
