import { Component, h, State } from '@stencil/core';

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
          <h1>Playground</h1>
        </div>
        <div class="content">
          <section>
            <railz-button label="Click me" onClick={e => console.log(e)} />
          </section>
        </div>
      </div>
    );
  }
}
