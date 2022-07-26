import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-select-input',
  styleUrl: 'page-select-input.scss',
  shadow: true,
})
export class PageSelectInput {
  render() {
    return (
      <div class="container">
        <div class="header">
          <h1>Select Inputs</h1>
        </div>

        <div class="content">
          <section>
            <h2>Select Input</h2>
            <p>
              The <code>railz-select-input</code> is an implementation of the HTML <code>select</code> element, and behaves similarly. In adition to receiving a list of options,
              you can also pass properties for <code>label</code>, <code>instructionalText</code>, <code>error</code> and <code>errorMessage</code>, the same as all other form
              elements.
            </p>
            <div class="group">
              <railz-select-input label="Address" instructionalText="Enter your address" />
              <railz-input-text label="Address" instructionalText="Enter your address" />
            </div>
          </section>
        </div>
        {/* 
        <railz-input-text label="Address" instructionalText="Enter your address" prefixOptions={['http', 'ssr']}></railz-input-text> */}
      </div>
    );
  }
}
