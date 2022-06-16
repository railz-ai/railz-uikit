import { Component, Prop, h } from '@stencil/core';

import { format } from '../../utils/utils';

/**
 * @description Component used to display the first name, middle name and last name of a user
 * if none or some of the parameters are not passed, it replaces the value with an empty string
 *
 */
@Component({
  tag: 'railz-component',
  styleUrl: 'railz-component.scss',
  shadow: true,
})
export class RailzComponent {
  /**
   * The first name
   * @type string
   * @default ''
   */
  @Prop() readonly first = '';

  /**
   * The middle name
   * @type string
   * @default ''
   */
  @Prop() readonly middle = '';

  /**
   * The last name
   * @type string
   * @default ''
   */
  @Prop() readonly last = '';

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render(): HTMLElement {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
