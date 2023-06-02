/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-no-bind */
import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
// Todo: resolve icon bug with Connect - zf
// import * as iconList from '../../assets/icons/index.json';

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
  @Prop() buttonType?: string;
  @Prop() isDisabled?: boolean;
  @Prop() grow?: boolean;
  @Prop() loading?: boolean;
  @Prop({ reflect: false }) href?: string;
  @Prop() target?: string = '_blank';

  @Event() buttonClick: EventEmitter;
  private handleClick(event: Event): void {
    this.buttonClick.emit(event);
  }

  private buttonStyles(): string {
    return `${this.type} ${this.size} ${this.shape} ${this.grow ? 'grow' : ''} 
    ${this.loading ? 'loading' : ''} ${this.isDisabled ? 'disabled' : ''}`;
  }

  // private renderIcon(): string {
  //   if (this.icon && iconList.icons.some(icon => icon.name === this.icon)) {
  //     return <railz-icon icon={this.icon} />;
  //   }
  // }

  private renderPrefixIcon(): string {
    if (!this.loading) {
      return (
        <div class="icon prefix-icon">
          <slot name="prefix" />
        </div>
      );
    }
  }

  private renderSuffixIcon(): string {
    if (!this.loading) {
      return (
        <div class="icon suffix-icon">
          <slot name="suffix" />
        </div>
      );
    }
  }

  private openNewTab(event: any, url: string): void {
    event.preventDefault();
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    newTab.opener = null;
  }

  render(): HTMLElement {
    return (
      <Host class={`button ${this.buttonStyles()}`}>
        {this.href ? (
          <a href={this.href} rel="noopener noreferrer" class={`button ${this.buttonStyles()}`} onClick={e => this.openNewTab(e, this.href)}>
            {this.renderPrefixIcon()}
            <span class="label">{this.label}</span>
            {this.renderSuffixIcon()}
          </a>
        ) : this.buttonType ? (
          <button type={this.buttonType} onClick={event => this.handleClick(event)} class={`button ${this.buttonStyles()}`} disabled={this.isDisabled}>
            {this.renderPrefixIcon()}
            {this.loading ? <span class="loading-indicator"></span> : null}
            <span class="label">{this.loading ? 'Loading...' : this.label}</span>
            {this.renderSuffixIcon()}
          </button>
        ) : (
          <button onClick={event => this.handleClick(event)} class={`button ${this.buttonStyles()}`} disabled={this.isDisabled}>
            {this.renderPrefixIcon()}
            {this.loading ? <span class="loading-indicator"></span> : null}
            <span class="label">{this.loading ? 'Loading...' : this.label}</span>
            {this.renderSuffixIcon()}
          </button>
        )}
      </Host>
    );
  }
}
