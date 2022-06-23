/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'railz-select-input',
  styleUrl: 'railz-select-input.scss',
  shadow: true,
})
export class RailzSelectInput {
  @Prop() label: string;
  @Prop() value?: string;
  @State() dirty?: boolean;

  @Prop() instructionalText?: string;
  @Prop() required?: boolean;
  @Prop({ reflect: true }) disabled?: boolean;
  @Prop() error?: boolean;
  @Prop() errorMessage?: string;

  private handleChange(event) {
    this.value = event.target.value;
  }

  @Watch('value')
  watchStateHandler(newValue: boolean) {
    // this.value = newValue;
    this.dirty = newValue;
    this.validationCheck();
  }

  private renderInstructionalText(): HTMLElement {
    if (this.instructionalText) {
      return <span class="instructional-text">{this.instructionalText}</span>;
    }
  }

  private renderErrorMessage(): HTMLElement {
    if (this.error || this.errorMessage) {
      return <span class="error-message">{this.errorMessage || 'Something wrong'}</span>;
    }
  }

  private validationCheck(): string {
    const validationClasses = [];
    if (this.errorMessage) {
      validationClasses.push('error');
    }
    if (this.dirty) {
      validationClasses.push('dirty');
    }
    return validationClasses.join(' ').toString();
  }

  render(): HTMLElement {
    return (
      <div class={`form-group ${this.validationCheck()}`}>
        <div class="input-container">
          <div class="label-container">
            <label>{this.label}</label>
          </div>

          <select onInput={event => this.handleChange(event)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <railz-icon icon="disclosure_arrow" size="medium" />
        </div>
        {this.renderInstructionalText()}
        {this.renderErrorMessage()}
      </div>
    );
  }
}
