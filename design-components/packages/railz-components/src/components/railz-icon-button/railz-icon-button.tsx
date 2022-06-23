import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'railz-icon-button',
  styleUrl: 'railz-icon-button.scss',
  shadow: true,
})
export class RailzIconButton {
  @Prop() icon: string;
  @Prop() label?: string;
  @Prop() shape?: string = 'rounded';

  @Prop() size?: string = 'medium';
  @Prop() disabled?: boolean;
  @Prop() loading?: boolean;

  private buttonStyles(): string {
    return `${this.size}  ${this.shape} ${this.loading ? 'loading' : ''} ${this.disabled ? 'disabled' : ''}`;
  }
  render(): HTMLElement {
    return (
      <Host class={`button ${this.buttonStyles()}`}>
        {/* <button class={`button ${this.buttonStyles()}`} disabled={this.disabled} onClick={() => this.buttonClick(Event)}> */}
        <button class={`button ${this.buttonStyles()}`} disabled={this.disabled}>
          <railz-icon icon={this.icon} />
          {/* {this.loading ? <span class="loading-indicator"></span> : null} */}
          {/* <span class="label">{this.loading ? 'Loading...' : this.label}</span> */}
        </button>
      </Host>
    );
  }
}
