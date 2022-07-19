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
        {/* TODO - Fix Icon behaviour */}
        {/* {this.icon ? <railz-icon icon={this.icon} size="x-small" /> : null} */}

        {this.icon === 'checkmark' && (
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
              <path d="M6.22222222,12.4444444 L1.77777778,8 L3.03111111,6.74666667 C4.99434751,8.86814815 6.05805122,9.92888889 6.22222222,9.92888889 C6.38639323,9.92888889 8.63528212,7.68 12.9688889,3.18222222 L14.2222222,4.44444444 L6.22222222,12.4444444 Z" />
            </svg>
          </div>
        )}
        <span class="label">{this.label}</span>
      </div>
    );
  }
}
