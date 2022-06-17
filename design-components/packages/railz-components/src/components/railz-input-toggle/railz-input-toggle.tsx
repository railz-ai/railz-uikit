import { Component, h, Prop, State, Watch } from '@stencil/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  tag: 'railz-input-toggle',
  styleUrl: 'railz-input-toggle.scss',
  shadow: true,
})
export class RailzInputToggle {
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
    this.checked = !this.checked;
  }

  @Watch('checked')
  watchPropHandler(newValue: boolean, oldValue: boolean) {
    console.log('The old value of activated is: ', oldValue);
    console.log('The new value of activated is: ', newValue);
  }

  @State() uuid: string = uuidv4().toString();

  renderInstructionalText() {
    if (this.instructionalText) {
      return <span class="instructional-text">{this.instructionalText}</span>;
    }
  }

  renderErrorMessage() {
    if (this.error || this.errorMessage) {
      // this.error = true;
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
      <div class={`form-group ${this.validationCheck()} ${this.checked ? 'checked' : ''}`}>
        <div class="input-container">
          <input type="checkbox" id={this.inputId || this.uuid} checked={this.checked} value={this.value} name={this.name} onChange={() => this.handleChange()} />
          <div class="toggle-track">
            <span class="state-label">{this.checked ? 'on' : 'off'}</span>
          </div>
          {this.indeterminate ? <railz-icon icon="indeterminate" size="x-small" /> : ''}
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
