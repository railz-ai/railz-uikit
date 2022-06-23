import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'railz-status-pill',
  styleUrl: 'railz-status-pill.scss',
  shadow: true,
})
export class RailzStatusPill {
  @Prop() label: string;
  @Prop() status: string;
  @Prop() type?: string;
  render(): HTMLElement {
    return (
      <div class={`pill-container ${this.status} ${this.type}`}>
        {this.type === 'service' ? <div class="dot"></div> : this.status === 'connected' ? <railz-icon icon="checkmark" size="x-small" /> : ''}

        <span class="label">{this.label}</span>
      </div>
    );
  }
}
