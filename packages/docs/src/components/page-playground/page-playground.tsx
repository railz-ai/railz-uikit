import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-playground',
  styleUrl: 'page-playground.scss',
  shadow: false,
})
export class PlaygroundPage {
  render() {
    return (
      <div class="container">
        <div class="header">
          <h1>Playground (use this place to test and break stuff)</h1>
        </div>
        <div class="content">
          <section>
            <h2>Railz Logo</h2>
            <div style={{ width: '100px' }}>
              <railz-logo name="sageBusinessCloud" variant="small" outlined />
            </div>
          </section>
          <section>
            <h2>Button</h2>
            <railz-button label="Click me" />
          </section>
        </div>
      </div>
    );
  }
}
