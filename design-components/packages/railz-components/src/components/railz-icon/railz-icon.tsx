/* eslint-disable max-len, @typescript-eslint/no-unused-vars */
import { Build, Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';

import { fetchIcon } from './utils';

@Component({
  assetsDirs: ['assets'],
  tag: 'railz-icon',
  styleUrl: 'railz-icon.scss',
  shadow: true,
})
export class RailzIcon {
  @Element() el: HTMLRailzIconElement;
  @Prop() icon: string = null;
  @Prop() size?: string;
  @Prop() initialSize = 16;
  @State() private pathData: string;
  @State() private visible = false;
  private intersectionObserver: IntersectionObserver;

  connectedCallback(): void {
    this.waitUntilVisible(() => {
      this.visible = true;
      this.loadIconPathData();
    });
  }

  disconnectedCallback(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = null;
    }
  }

  async componentWillLoad(): Promise<void> {
    this.loadIconPathData();
  }

  render(): HTMLElement {
    return (
      <Host class={`icon ${this.size}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" preserveAspectRatio="xMidYMid meet" viewBox={`0 0 ${this.initialSize} ${this.initialSize}`}>
          <path d={`${this.pathData}`} />;
        </svg>
      </Host>
    );
  }

  @Watch('icon') private async loadIconPathData(): Promise<void> {
    const { icon, visible } = this;
    if (!Build.isBrowser || !icon || !visible) {
      return;
    }
    this.pathData = await fetchIcon(icon);
  }

  private waitUntilVisible(callback: () => void): void {
    if (!Build.isBrowser || typeof window === 'undefined' || !(window as typeof window).IntersectionObserver) {
      callback();
      return;
    }

    this.intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.intersectionObserver.disconnect();
            this.intersectionObserver = null;
            callback();
          }
        });
      },
      { rootMargin: '50px' },
    );

    this.intersectionObserver.observe(this.el);
  }
}
