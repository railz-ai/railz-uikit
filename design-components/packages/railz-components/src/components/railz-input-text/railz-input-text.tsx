import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'railz-input-text',
  styleUrl: 'railz-input-text.scss',
  shadow: true,
})
export class RailzTextInput {
  @Prop() label: string;
  @Prop() value?: string;
  @State() dirty?: boolean;
  @Prop() placeholder?: string;
  @Prop() instructionalText?: string;
  // @Prop() prefixOptions?: string;

  @Prop() type?: string | 'text';
  @Prop() inputmode?: string | 'text';
  @Prop() required?: boolean;
  @Prop({ reflect: true }) disabled?: boolean;
  @Prop() error?: boolean;
  @Prop() errorMessage?: string;
  @Prop() minContentLength?: Number;
  @Prop() maxContentLength?: Number;
  @Prop() minNumber?: string;
  @Prop() maxNumber?: string;
  @Prop() pattern?: string;
  @Prop() enterkeyhint?: string;
  @Prop() autocomplete?: string;

  @Prop() prefixIcon?: string;

  handleChange(event) {
    this.value = event.target.value;
  }

  @Watch('value')
  watchStateHandler(newValue) {
    this.value = newValue;
    this.dirty = newValue;
    this.validationCheck();
  }

  renderInstructionalText() {
    if (this.instructionalText) {
      return <span class="instructional-text">{this.instructionalText}</span>;
    }
  }

  renderErrorMessage() {
    if (this.error || this.errorMessage) {
      return <span class="error-message">{this.errorMessage || 'Something wrong'}</span>;
    }
  }

  validationCheck() {
    const validationClasses = [];
    if (this.errorMessage) {
      validationClasses.push('error');
    }
    if (this.dirty) {
      validationClasses.push('dirty');
    }
    return validationClasses.join(' ').toString();
  }

  render() {
    return (
      <div class={`form-group ${this.validationCheck()}`}>
        <div class="input-container">
          {this.prefixIcon ? <railz-icon icon={this.prefixIcon} size="medium" /> : null}

          <span class="prefix-container">
            <slot name="prefix" />
          </span>

          <div class="label-container">
            <label>{this.label}</label>
          </div>

          <input
            type={this.type}
            value={this.value}
            placeholder={this.placeholder}
            autoComplete={this.autocomplete}
            inputmode={this.inputmode}
            pattern={this.pattern}
            min={this.minNumber}
            max={this.maxNumber}
            onInput={event => this.handleChange(event)}
          />
          <span class="suffix-container">
            <slot name="suffix" />
          </span>
        </div>

        {this.renderInstructionalText()}
        {this.renderErrorMessage()}
      </div>
    );
  }
}
