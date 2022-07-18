/* eslint-disable max-len, @typescript-eslint/no-unused-vars */
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'railz-status-pill',
  styleUrl: 'railz-status-pill.scss',
  shadow: true,
})
export class RailzStatusPill {
  @Prop() label: string;
  @Prop() status: string;
  @Prop() icon?: string;

  render(): HTMLElement {
    return (
      <div class={`pill-container ${this.status}`}>
        {this.icon === 'dot' ? <div class="dot"></div> : null}
        {this.icon ? <railz-icon icon={this.icon} size="x-small" /> : null}
        <span class="label">{this.label}</span>
      </div>
    );
  }
}
