/* tslint:disable */
/* auto-generated angular directive proxies */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  NgZone,
} from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@railzai/railz-uikit';

export declare interface RailzButton extends Components.RailzButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'grow', 'icon', 'label', 'loading', 'shape', 'size', 'type'],
})
@Component({
  selector: 'railz-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'grow', 'icon', 'label', 'loading', 'shape', 'size', 'type'],
})
export class RailzButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface RailzComponent extends Components.RailzComponent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['first', 'last', 'middle'],
})
@Component({
  selector: 'railz-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['first', 'last', 'middle'],
})
export class RailzComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface RailzIcon extends Components.RailzIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['icon', 'initialSize', 'size'],
})
@Component({
  selector: 'railz-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'initialSize', 'size'],
})
export class RailzIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface RailzIconButton extends Components.RailzIconButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'icon', 'label', 'loading', 'shape', 'size'],
})
@Component({
  selector: 'railz-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'icon', 'label', 'loading', 'shape', 'size'],
})
export class RailzIconButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface RailzInputCheckbox extends Components.RailzInputCheckbox {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: [
    'checked',
    'disabled',
    'error',
    'errorMessage',
    'indeterminate',
    'inputId',
    'instructionalText',
    'label',
    'name',
    'required',
    'value',
  ],
})
@Component({
  selector: 'railz-input-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: [
    'checked',
    'disabled',
    'error',
    'errorMessage',
    'indeterminate',
    'inputId',
    'instructionalText',
    'label',
    'name',
    'required',
    'value',
  ],
})
export class RailzInputCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface RailzInputRadio extends Components.RailzInputRadio {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: [
    'checked',
    'disabled',
    'error',
    'errorMessage',
    'indeterminate',
    'inputId',
    'instructionalText',
    'label',
    'name',
    'required',
    'value',
  ],
})
@Component({
  selector: 'railz-input-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: [
    'checked',
    'disabled',
    'error',
    'errorMessage',
    'indeterminate',
    'inputId',
    'instructionalText',
    'label',
    'name',
    'required',
    'value',
  ],
})
export class RailzInputRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface RailzInputRadioGroup extends Components.RailzInputRadioGroup {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['options'],
})
@Component({
  selector: 'railz-input-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['options'],
})
export class RailzInputRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface RailzInputText extends Components.RailzInputText {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: [
    'autocomplete',
    'disabled',
    'enterkeyhint',
    'error',
    'errorMessage',
    'inputId',
    'inputmode',
    'instructionalText',
    'label',
    'maxContentLength',
    'maxNumber',
    'minContentLength',
    'minNumber',
    'pattern',
    'placeholder',
    'prefixIcon',
    'required',
    'type',
    'value',
  ],
})
@Component({
  selector: 'railz-input-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: [
    'autocomplete',
    'disabled',
    'enterkeyhint',
    'error',
    'errorMessage',
    'inputId',
    'inputmode',
    'instructionalText',
    'label',
    'maxContentLength',
    'maxNumber',
    'minContentLength',
    'minNumber',
    'pattern',
    'placeholder',
    'prefixIcon',
    'required',
    'type',
    'value',
  ],
})
export class RailzInputText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface RailzInputToggle extends Components.RailzInputToggle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: [
    'checked',
    'disabled',
    'error',
    'errorMessage',
    'indeterminate',
    'inputId',
    'instructionalText',
    'label',
    'name',
    'required',
    'value',
  ],
})
@Component({
  selector: 'railz-input-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: [
    'checked',
    'disabled',
    'error',
    'errorMessage',
    'indeterminate',
    'inputId',
    'instructionalText',
    'label',
    'name',
    'required',
    'value',
  ],
})
export class RailzInputToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface RailzNested extends Components.RailzNested {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['sumList'],
})
@Component({
  selector: 'railz-nested',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['sumList'],
})
export class RailzNested {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface RailzNestedSum extends Components.RailzNestedSum {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['first', 'second'],
})
@Component({
  selector: 'railz-nested-sum',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['first', 'second'],
})
export class RailzNestedSum {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface RailzSelectInput extends Components.RailzSelectInput {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'error', 'errorMessage', 'instructionalText', 'label', 'required', 'value'],
})
@Component({
  selector: 'railz-select-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'error', 'errorMessage', 'instructionalText', 'label', 'required', 'value'],
})
export class RailzSelectInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface RailzStatusPill extends Components.RailzStatusPill {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['label', 'status', 'type'],
})
@Component({
  selector: 'railz-status-pill',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label', 'status', 'type'],
})
export class RailzStatusPill {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
