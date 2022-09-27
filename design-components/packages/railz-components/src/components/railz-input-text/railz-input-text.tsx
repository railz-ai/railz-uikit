/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  tag: 'railz-input-text',
  styleUrl: 'railz-input-text.scss',
  shadow: true,
})
export class RailzInputText {
  @Prop() inputClassName?: string;
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

  render(): HTMLElement {
    return (
      <div class={`form-group ${this.inputClassName}`}>
        <div class="input-container">
          <p>test</p>
        </div>

        <p>test</p>
      </div>
    );
  }
}
