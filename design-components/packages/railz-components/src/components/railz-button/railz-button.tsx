import { Component, Host, h, Prop } from '@stencil/core';

import * as iconList from '../../assets/icons/index.json';
/**
 * @description This is the button
 *
 */
@Component({
  tag: 'railz-button',
  styleUrl: 'railz-button.scss',
  shadow: false,
  scoped: true,
})
export class RailzButton {
  @Prop() label: string;
  @Prop() type?: string = 'primary';
  @Prop() shape?: string = 'rounded';
  @Prop() size?: string = 'medium';
  @Prop() icon?: string;
  @Prop() disabled?: boolean;
  @Prop() grow?: boolean;
  @Prop() loading?: boolean;

  private buttonStyles(): string {
    return `${this.type} ${this.size} ${this.shape} ${this.grow ? 'grow' : ''} ${this.loading ? 'loading' : ''} ${this.disabled ? 'disabled' : ''}`;
  }

  private renderIcon(): string {
    if (this.icon && iconList.icons.some(icon => icon.name === this.icon)) {
      return <railz-icon icon={this.icon} />;
    }
  }

  render(): HTMLElement {
    return (
      <Host class={`button ${this.buttonStyles()}`}>
        {/* <button class={`button ${this.buttonStyles()}`} disabled={this.disabled} onClick={() => this.buttonClick(Event)}> */}
        <button class={`button ${this.buttonStyles()}`} disabled={this.disabled}>
          {this.renderIcon()}
          {this.loading ? <span class="loading-indicator"></span> : null}
          <span class="label">{this.loading ? 'Loading...' : this.label}</span>
        </button>
      </Host>
    );
  }
}
