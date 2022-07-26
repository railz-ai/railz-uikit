import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'color-swatch',
  styleUrl: 'color-swatch.scss',
  shadow: true,
})
export class ColorSwatch {
  @Prop() name: any;
  @Prop() colorValue?: any;
  @Prop() colorName?: any;

  render() {
    return (
      <div class="swatch">
        <div class={`sample ${this.name}`} style={{ backgroundColor: this.colorValue }}></div>
        <div class="description">
          <span class="name">{this.name}</span>
          <span class="value">{this.colorValue || this.colorName}</span>
        </div>
      </div>
    );
  }
}
