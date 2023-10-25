/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable max-len, @typescript-eslint/no-unused-vars */
import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { v4 as uuidv4 } from 'uuid';

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
  @Prop({ mutable: true }) value?: string;
  @Prop() options: Option[];
  @Prop() optionTemplate?: unknown[];
  @Prop() partName?: string;

  @Prop() placeholder?: string;
  @Prop({ mutable: true }) dirty?: boolean;

  @Prop() instructionalText?: string;
  @Prop() required?: boolean;
  @Prop({ reflect: true }) disabled?: boolean;
  @Prop() error?: boolean;
  @Prop() errorMessage?: string;
  @Prop() name?: string = uuidv4().toString();

  @Event() valueChange: EventEmitter;
  private handleChange(event: Event, key?: string) {
    const eventTarget = event?.target as HTMLSelectElement;

    const emitValue = eventTarget?.value ? eventTarget?.value : this.options[key].label;

    this.value = emitValue;

    this.valueChange.emit(this.value);

    if (this.value?.length > 0) {
      this.dirty = true;
    } else {
      this.dirty = false;
    }
  }

  componentWillLoad() {
    this.value ? (this.dirty = true) : (this.dirty = false);
  }

  private renderInstructionalText(): HTMLElement {
    if (this.instructionalText) {
      return <span class="instructional-text">{this.instructionalText}</span>;
    }
  }

  private renderErrorMessage(): HTMLElement {
    if (this.error || this.errorMessage) {
      return <span class="error-message">{this.errorMessage || 'Something is wrong'}</span>;
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

  private selectItem(optionItem, key): void {
    this.handleChange(optionItem, key);
  }

  render(): HTMLElement {
    return (
      <div class={`form-group ${this.validationCheck()}`}>
        <div class="input-container">
          <div class="label-container">
            <label>{this.label}</label>
          </div>

          {this.optionTemplate ? (
            <div>
              <input type="text" value={this.value} placeholder={this.placeholder} readOnly={true} />
              <div class="menu-container">
                <ul class="menu">
                  {this.optionTemplate.map((optionItem, key) => (
                    <li class="option-item" part="option-item" tabIndex={0} onClick={optionItem => this.selectItem(optionItem, key)}>
                      {optionItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <select onInput={e => this.handleChange(e)} name={this.name}>
              {this.options.map(option => (
                <option selected={this.value === option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
          <railz-icon icon="disclosure_arrow" size="medium" />
        </div>
        {this.renderInstructionalText()}
        {this.renderErrorMessage()}
      </div>
    );
  }
}
