/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
import { Component, h, Prop, State } from '@stencil/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  tag: 'railz-input-checkbox',
  styleUrl: 'railz-input-checkbox.scss',
  shadow: true,
})
export class RailzInputCheckbox {
  @Prop() label: string;
  @Prop() instructionalText?: string;

  @Prop() inputId: string;
  @Prop() name: string;
  @Prop() value: string;

  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ mutable: true, reflect: true }) checked?: boolean;
  @Prop({ mutable: true }) indeterminate?: boolean;
  @Prop() disabled?: boolean;
  @Prop() required: string;

  @Prop({ mutable: true }) error?: boolean;
  @Prop() errorMessage?: string;

  @State() uuid: string = uuidv4().toString();

  private handleChange(): void {
    this.indeterminate = false;
    this.error = false;
  }

  private renderInstructionalText(): HTMLElement {
    if (this.instructionalText) {
      return <span class="instructional-text">{this.instructionalText}</span>;
    }
  }

  private renderErrorMessage(): HTMLElement {
    if (this.error) {
      return <span class="error-message">{this.errorMessage || 'Something went wrong'}</span>;
    }
  }

  private validationCheck(): string {
    const validationClasses = [''];

    if (this.error) {
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

  render(): HTMLElement {
    return (
      <div class={`form-group ${this.validationCheck()} ${this.checked ? 'checked' : ''}`}>
        <div class="input-container">
          <input type="checkbox" id={this.inputId || this.uuid} checked={this.checked} value={this.value} name={this.name} onChange={() => this.handleChange()} />
          {this.indeterminate ? <railz-icon icon="indeterminate" size="x-small" /> : <railz-icon icon="checkmark" size="x-small" />}
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
