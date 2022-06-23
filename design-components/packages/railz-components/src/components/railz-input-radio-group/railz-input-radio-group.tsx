import { Component, Host, h, Prop } from '@stencil/core';

export interface RadioInput {
  label: string;
  instructionalText?: string;
  inputId?: string;
  name: string;
  value: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  required?: string;
  error?: boolean;
  errorMessage?: string;
}
@Component({
  tag: 'railz-input-radio-group',
  styleUrl: 'railz-input-radio-group.css',
  shadow: true,
})
export class RailzInputRadioGroup {
  // @Prop({ mutable: true }) options: RadioInput[];
  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ mutable: true }) options: any[];

  render(): HTMLElement {
    return (
      <Host>
        {this.options.map(option => (
          <railz-input-radio
            label={option.label}
            instructionalText={option.instructionalText}
            inputId={option.inputId}
            name={option.name}
            value={option.value}
            checked={option.checked}
            indeterminate={option.indeterminate}
            disabled={option.disabled}
            required={option.required}
            error={option.error}
            errorMessage={option.errorMessage}
          />
        ))}
      </Host>
    );
  }
}
