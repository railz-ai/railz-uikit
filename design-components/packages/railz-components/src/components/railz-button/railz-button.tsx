/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-no-bind */
import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

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
  @Prop() icon?: string;
  @Prop() isDisabled?: boolean;
  @Prop() grow?: boolean;
  @Prop() loading?: boolean;
  @Prop() href?: string;
  @Prop() target?: string = '_blank';

  @Event() buttonClick: EventEmitter;
  private handleClick(event: Event): void {
    this.buttonClick.emit(event);
  }

  private buttonStyles(): string {
    return `${this.type} ${this.size} ${this.shape} ${this.grow ? 'grow' : ''} ${this.loading ? 'loading' : ''} ${this.isDisabled ? 'disabled' : ''}`;
  }

  // private renderIcon(): string {
  //   if (this.icon && iconList.icons.some(icon => icon.name === this.icon)) {
  //     return <railz-icon icon={this.icon} />;
  //   }
  // }

  render(): HTMLElement {
    return (
      <Host class={`button ${this.buttonStyles()}`}>
        {this.href ? (
          <a href={this.href} target={this.target} class={`button ${this.buttonStyles()}`}>
            {/* {this.renderIcon()} */}
            <span class="label">{this.label}</span>
          </a>
        ) : (
          <button onClick={event => this.handleClick(event)} class={`button ${this.buttonStyles()}`} disabled={this.isDisabled}>
            {/* {this.renderIcon()} */}
            {this.loading ? <span class="loading-indicator"></span> : null}
            <span class="label">{this.loading ? 'Loading...' : this.label}</span>
          </button>
        )}
      </Host>
    );
  }
}
