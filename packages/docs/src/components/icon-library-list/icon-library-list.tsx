import { Component, Host, h } from '@stencil/core';

import * as iconList from '../../assets/icons/index.json';

@Component({
  tag: 'icon-library-list',
  styleUrl: 'icon-library-list.scss',
  shadow: false,
  scoped: true,
})
export class IconLibraryList {
  public iconNames = iconList.icons;

  public iconSizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-large'];

  render() {
    return (
      <Host>
        <section>
          <h3>Flexible Size</h3>
          <p>
            By default, icons have no inherit size, and will scale to fill the available space. This demo is displaying <code>li</code> elements with{' '}
            <code>width: 25% | 10% | 20%</code> depending on screen size.
          </p>
          <ul class="icons flexible">
            {this.iconNames.map(icon => (
              <li>
                <railz-icon icon={icon.name}></railz-icon>
                <span class="tooltip">{icon.name}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3>Preset Sizes</h3>
          <p>
            <strong>RailzUIKit</strong> has several predefined icon sizes, defined in <code>uikit/tokens/_icons.scss</code>
          </p>

          <ul class="icon-sizes">
            {this.iconSizes.map(size => (
              <li>
                <h3>{size}</h3>
                <p class="subline">
                  <code>{`<railz-icon icon="{name}" size="${size.toLowerCase()}" />`}</code>
                </p>
                <ul class={`${size.toLowerCase()} icons  `}>
                  {this.iconNames.map(icon => (
                    <li>
                      <railz-icon icon={icon.name}></railz-icon>
                      <span class="tooltip">{icon.name}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </Host>
    );
  }
}
