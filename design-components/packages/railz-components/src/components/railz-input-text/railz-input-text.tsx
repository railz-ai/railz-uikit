/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable max-len, @typescript-eslint/no-unused-vars */
import { Component, h, Prop, State, Watch, Event, EventEmitter } from '@stencil/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  tag: 'railz-input-text',
  styleUrl: 'railz-input-text.scss',
  shadow: true,
})
export class RailzInputText {
  @Prop() label: string;

  @Prop() inputId?: string;

  @State() dirty?: boolean;
  @Prop() placeholder?: string;
  @Prop() instructionalText?: string;

  @Prop() type?: string | 'text';
  @Prop() inputmode?: string | 'text';
  @Prop() required?: boolean;
  @Prop({ reflect: true }) disabled?: boolean;
  @Prop() error?: boolean;
  @Prop() errorMessage?: string;
  @Prop() minContentLength?: number;
  @Prop() maxContentLength?: number;
  @Prop() minNumber?: string;
  @Prop() maxNumber?: string;
  @Prop() pattern?: string;
  @Prop() enterkeyhint?: string;
  @Prop() autocomplete?: string;

  @Prop() prefixIcon?: string;

  @Prop() value?: string;

  @State() uuid: string = uuidv4().toString();

  @Event() valueChange: EventEmitter;
  private handleChange(event: Event) {
    const eventTarget = event.target as HTMLInputElement;
    this.valueChange.emit(eventTarget.value);

    if (eventTarget.value.length > 0) {
      this.dirty = true;
    } else {
      this.dirty = false;
    }

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
    if (this.error) {
      validationClasses.push('error');
    }
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
          {this.prefixIcon ? <railz-icon icon={this.prefixIcon} size="medium" /> : null}

          <span class="prefix-container">
            <slot name="prefix" />
          </span>

          <div class="label-container">
            <label htmlFor={this.inputId || this.uuid}>{this.label}</label>
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
            id={this.inputId || this.uuid}
            onInput={event => this.handleChange(event)}
            multiple
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
