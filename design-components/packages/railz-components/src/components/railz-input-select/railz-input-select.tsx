/* eslint-disable max-len, @typescript-eslint/no-unused-vars */
import { Component, h, Prop, State, Watch } from '@stencil/core';

export interface Option {
  value: string;
  label: string;
}

@Component({
  tag: 'railz-input-select',
  styleUrl: 'railz-input-select.scss',
  shadow: true,
})
export class RailzInputSelect {
  @Prop() label: string;
  @Prop() value?: string;
  @Prop() options: Option[];
  @State() dirty?: boolean;

  @Prop() instructionalText?: string;
  @Prop() required?: boolean;
  @Prop({ reflect: true }) disabled?: boolean;
  @Prop() error?: boolean;
  @Prop() errorMessage?: string;

  private handleChange(event): void {
    this.value = event.target.value;
  }

  @Watch('value')
  watchValue(newValue: boolean): void {
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

          <select onInput={this.handleChange}>
            {this.options.map(option => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <railz-icon icon="disclosure_arrow" size="medium" />
        </div>
        {this.renderInstructionalText()}
        {this.renderErrorMessage()}
      </div>
    );
  }
}
