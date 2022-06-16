import { Component, h, Prop } from '@stencil/core';

import { Sum } from './types/sum';

/**
 * RailzNested
 * @description Allow passing of details about a nested document
 */
@Component({
  tag: 'railz-nested',
  styleUrl: 'railz-nested.css',
  shadow: true,
})
export class RailzNested {
  /**
   * The list of numbers to sum up
   * @type Sum
   * @default []
   */
  @Prop() readonly sumList: Sum[] = [];

  render(): HTMLElement {
    return (
      <div>
        <p>
          <b>Now using Railz Nested Component</b>
        </p>
        {(this.sumList || []).map(sum => (
          <railz-nested-sum first={sum.first} second={sum.second} />
        ))}
      </div>
    );
  }
}
