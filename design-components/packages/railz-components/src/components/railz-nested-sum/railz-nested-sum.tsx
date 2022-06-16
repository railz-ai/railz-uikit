import { Component, h, Prop } from '@stencil/core';

/**
 * @group RailzNested
 * @description Component used to sum two numbers
 */
@Component({
  tag: 'railz-nested-sum',
  styleUrl: 'railz-nested-sum.css',
  shadow: true,
})
export class RailzNestedSum {
  /**
   * The first number to sum up
   * @type number
   * @default 0
   */
  @Prop() readonly first = 0;

  /**
   * The second number
   * @type number
   * @default 0
   */
  @Prop() readonly second = 0;

  private getSum(): number {
    return (this.first || 0) + (this.second || 0);
  }

  render(): HTMLElement {
    return (
      <div>
        The sum of {this.first} & {this.second} is <b>{this.getSum()}</b>
      </div>
    );
  }
}
