import { Component, h, Prop, State } from '@stencil/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  tag: 'railz-input-radio',
  styleUrl: 'railz-input-radio.scss',
  shadow: false,
  scoped: true,
})
export class RailzInputRadio {
  @Prop() label: string;
  @Prop() instructionalText?: string;

  @Prop() inputId: string;
  @Prop() name: string;
  @Prop() value: string;

  @Prop({ mutable: true, reflect: true }) checked?: boolean;
  @Prop({ mutable: true }) indeterminate?: boolean;
  @Prop() disabled?: boolean;
  @Prop() required: string;

  @Prop({ mutable: true }) error?: boolean;
  @Prop() errorMessage?: string;

  handleChange() {
    this.indeterminate = false;
    this.error = false;
  }

  @State() uuid: string = uuidv4().toString();

  renderInstructionalText() {
    if (this.instructionalText) {
      return <span class="instructional-text">{this.instructionalText}</span>;
    }
  }

  renderErrorMessage() {
    if (this.error || this.errorMessage) {
      return <span class="error-message">{this.errorMessage || 'Something went wrong'}</span>;
    }
  }

  validationCheck() {
    const validationClasses = [''];

    if (this.errorMessage || this.error) {
      validationClasses.push('error');
    }

    if (this.indeterminate) {
      validationClasses.push('indeterminate');
    }

    if (this.disabled) {
      validationClasses.push('disabled');
    }

    return validationClasses.join(' ').toString();
  }

  render() {
    return (
      <div class={`form-group ${this.validationCheck()}`}>
        <div class="input-container">
          <input
            type="radio"
            id={this.inputId || this.uuid}
            name={this.name}
            checked={this.checked}
            value={this.value}
            disabled={this.disabled}
            onChange={() => this.handleChange()}
          ></input>
        </div>
        <div class="label-container">
          <label htmlFor={this.inputId || this.uuid}>{this.label}</label>
          {this.renderInstructionalText()}
          {this.renderErrorMessage()}
        </div>
      </div>
    );
  }
}
