/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import { RadioInput } from './components/railz-input-radio-group/railz-input-radio-group';
export namespace Components {
  interface RailzButton {
    grow?: boolean;
    href?: string;
    icon?: string;
    isDisabled?: boolean;
    label: string;
    loading?: boolean;
    shape?: string;
    size?: string;
    target?: string;
    type?: string;
  }
  interface RailzIcon {
    icon: string;
    initialSize: number;
    size?: string;
  }
  interface RailzIconButton {
    disabled?: boolean;
    icon: string;
    label?: string;
    loading?: boolean;
    shape?: string;
    size?: string;
  }
  interface RailzInputCheckbox {
    checked?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    indeterminate?: boolean;
    inputId: string;
    instructionalText?: string;
    label: string;
    name: string;
    required: string;
    value: string;
  }
  interface RailzInputRadio {
    checked?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    indeterminate?: boolean;
    inputId: string;
    instructionalText?: string;
    label: string;
    name: string;
    required: string;
    value: string;
  }
  interface RailzInputRadioGroup {
    options: RadioInput[];
  }
  interface RailzInputSelect {
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    instructionalText?: string;
    label: string;
    required?: boolean;
    value?: string;
  }
  interface RailzInputText {
    autocomplete?: string;
    disabled?: boolean;
    enterkeyhint?: string;
    error?: boolean;
    errorMessage?: string;
    inputId?: string;
    inputmode?: string | 'text';
    instructionalText?: string;
    label: string;
    maxContentLength?: number;
    maxNumber?: string;
    minContentLength?: number;
    minNumber?: string;
    pattern?: string;
    placeholder?: string;
    prefixIcon?: string;
    required?: boolean;
    type?: string | 'text';
    value?: string;
  }
  interface RailzInputToggle {
    checked?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    indeterminate?: boolean;
    inputId: string;
    instructionalText?: string;
    label: string;
    name: string;
    required: string;
    value: string;
  }
  interface RailzLogo {
    imgIconName?: string;
    imgIconUrl?: string;
    /**
     * Name of service provider
     */
    name?: string;
    outline?: boolean;
    variant: string;
  }
  interface RailzStatusPill {
    icon?: string;
    label: string;
    status: string;
  }
}
declare global {
  interface HTMLRailzButtonElement extends Components.RailzButton, HTMLStencilElement {}
  var HTMLRailzButtonElement: {
    prototype: HTMLRailzButtonElement;
    new (): HTMLRailzButtonElement;
  };
  interface HTMLRailzIconElement extends Components.RailzIcon, HTMLStencilElement {}
  var HTMLRailzIconElement: {
    prototype: HTMLRailzIconElement;
    new (): HTMLRailzIconElement;
  };
  interface HTMLRailzIconButtonElement extends Components.RailzIconButton, HTMLStencilElement {}
  var HTMLRailzIconButtonElement: {
    prototype: HTMLRailzIconButtonElement;
    new (): HTMLRailzIconButtonElement;
  };
  interface HTMLRailzInputCheckboxElement extends Components.RailzInputCheckbox, HTMLStencilElement {}
  var HTMLRailzInputCheckboxElement: {
    prototype: HTMLRailzInputCheckboxElement;
    new (): HTMLRailzInputCheckboxElement;
  };
  interface HTMLRailzInputRadioElement extends Components.RailzInputRadio, HTMLStencilElement {}
  var HTMLRailzInputRadioElement: {
    prototype: HTMLRailzInputRadioElement;
    new (): HTMLRailzInputRadioElement;
  };
  interface HTMLRailzInputRadioGroupElement extends Components.RailzInputRadioGroup, HTMLStencilElement {}
  var HTMLRailzInputRadioGroupElement: {
    prototype: HTMLRailzInputRadioGroupElement;
    new (): HTMLRailzInputRadioGroupElement;
  };
  interface HTMLRailzInputSelectElement extends Components.RailzInputSelect, HTMLStencilElement {}
  var HTMLRailzInputSelectElement: {
    prototype: HTMLRailzInputSelectElement;
    new (): HTMLRailzInputSelectElement;
  };
  interface HTMLRailzInputTextElement extends Components.RailzInputText, HTMLStencilElement {}
  var HTMLRailzInputTextElement: {
    prototype: HTMLRailzInputTextElement;
    new (): HTMLRailzInputTextElement;
  };
  interface HTMLRailzInputToggleElement extends Components.RailzInputToggle, HTMLStencilElement {}
  var HTMLRailzInputToggleElement: {
    prototype: HTMLRailzInputToggleElement;
    new (): HTMLRailzInputToggleElement;
  };
  interface HTMLRailzLogoElement extends Components.RailzLogo, HTMLStencilElement {}
  var HTMLRailzLogoElement: {
    prototype: HTMLRailzLogoElement;
    new (): HTMLRailzLogoElement;
  };
  interface HTMLRailzStatusPillElement extends Components.RailzStatusPill, HTMLStencilElement {}
  var HTMLRailzStatusPillElement: {
    prototype: HTMLRailzStatusPillElement;
    new (): HTMLRailzStatusPillElement;
  };
  interface HTMLElementTagNameMap {
    'railz-button': HTMLRailzButtonElement;
    'railz-icon': HTMLRailzIconElement;
    'railz-icon-button': HTMLRailzIconButtonElement;
    'railz-input-checkbox': HTMLRailzInputCheckboxElement;
    'railz-input-radio': HTMLRailzInputRadioElement;
    'railz-input-radio-group': HTMLRailzInputRadioGroupElement;
    'railz-input-select': HTMLRailzInputSelectElement;
    'railz-input-text': HTMLRailzInputTextElement;
    'railz-input-toggle': HTMLRailzInputToggleElement;
    'railz-logo': HTMLRailzLogoElement;
    'railz-status-pill': HTMLRailzStatusPillElement;
  }
}
declare namespace LocalJSX {
  interface RailzButton {
    grow?: boolean;
    href?: string;
    icon?: string;
    isDisabled?: boolean;
    label?: string;
    loading?: boolean;
    onButtonClick?: (event: CustomEvent<any>) => void;
    shape?: string;
    size?: string;
    target?: string;
    type?: string;
  }
  interface RailzIcon {
    icon?: string;
    initialSize?: number;
    size?: string;
  }
  interface RailzIconButton {
    disabled?: boolean;
    icon?: string;
    label?: string;
    loading?: boolean;
    shape?: string;
    size?: string;
  }
  interface RailzInputCheckbox {
    checked?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    indeterminate?: boolean;
    inputId?: string;
    instructionalText?: string;
    label?: string;
    name?: string;
    required?: string;
    value?: string;
  }
  interface RailzInputRadio {
    checked?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    indeterminate?: boolean;
    inputId?: string;
    instructionalText?: string;
    label?: string;
    name?: string;
    required?: string;
    value?: string;
  }
  interface RailzInputRadioGroup {
    options?: RadioInput[];
  }
  interface RailzInputSelect {
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    instructionalText?: string;
    label?: string;
    required?: boolean;
    value?: string;
  }
  interface RailzInputText {
    autocomplete?: string;
    disabled?: boolean;
    enterkeyhint?: string;
    error?: boolean;
    errorMessage?: string;
    inputId?: string;
    inputmode?: string | 'text';
    instructionalText?: string;
    label?: string;
    maxContentLength?: number;
    maxNumber?: string;
    minContentLength?: number;
    minNumber?: string;
    onValueChange?: (event: CustomEvent<any>) => void;
    pattern?: string;
    placeholder?: string;
    prefixIcon?: string;
    required?: boolean;
    type?: string | 'text';
    value?: string;
  }
  interface RailzInputToggle {
    checked?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    indeterminate?: boolean;
    inputId?: string;
    instructionalText?: string;
    label?: string;
    name?: string;
    required?: string;
    value?: string;
  }
  interface RailzLogo {
    imgIconName?: string;
    imgIconUrl?: string;
    /**
     * Name of service provider
     */
    name?: string;
    outline?: boolean;
    variant?: string;
  }
  interface RailzStatusPill {
    icon?: string;
    label?: string;
    status?: string;
  }
  interface IntrinsicElements {
    'railz-button': RailzButton;
    'railz-icon': RailzIcon;
    'railz-icon-button': RailzIconButton;
    'railz-input-checkbox': RailzInputCheckbox;
    'railz-input-radio': RailzInputRadio;
    'railz-input-radio-group': RailzInputRadioGroup;
    'railz-input-select': RailzInputSelect;
    'railz-input-text': RailzInputText;
    'railz-input-toggle': RailzInputToggle;
    'railz-logo': RailzLogo;
    'railz-status-pill': RailzStatusPill;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'railz-button': LocalJSX.RailzButton & JSXBase.HTMLAttributes<HTMLRailzButtonElement>;
      'railz-icon': LocalJSX.RailzIcon & JSXBase.HTMLAttributes<HTMLRailzIconElement>;
      'railz-icon-button': LocalJSX.RailzIconButton & JSXBase.HTMLAttributes<HTMLRailzIconButtonElement>;
      'railz-input-checkbox': LocalJSX.RailzInputCheckbox & JSXBase.HTMLAttributes<HTMLRailzInputCheckboxElement>;
      'railz-input-radio': LocalJSX.RailzInputRadio & JSXBase.HTMLAttributes<HTMLRailzInputRadioElement>;
      'railz-input-radio-group': LocalJSX.RailzInputRadioGroup & JSXBase.HTMLAttributes<HTMLRailzInputRadioGroupElement>;
      'railz-input-select': LocalJSX.RailzInputSelect & JSXBase.HTMLAttributes<HTMLRailzInputSelectElement>;
      'railz-input-text': LocalJSX.RailzInputText & JSXBase.HTMLAttributes<HTMLRailzInputTextElement>;
      'railz-input-toggle': LocalJSX.RailzInputToggle & JSXBase.HTMLAttributes<HTMLRailzInputToggleElement>;
      'railz-logo': LocalJSX.RailzLogo & JSXBase.HTMLAttributes<HTMLRailzLogoElement>;
      'railz-status-pill': LocalJSX.RailzStatusPill & JSXBase.HTMLAttributes<HTMLRailzStatusPillElement>;
    }
  }
}
