import { Component, Element, h, Host, State } from '@stencil/core';

@Component({
  tag: 'page-theme',
  styleUrl: 'page-theme.scss',
  shadow: true,
})
export class PageTheme {
  @Element() el: HTMLElement;
  @State() themed: boolean = true;
  @State() primaryColor: string;

  toggleThemed() {
    this.themed = !this.themed;
  }

  updateColors(event) {
    console.log('updateColors', event.target.value);
    this.primaryColor = event.target.value;
    // this.style = `--color-primary: 'red'`;
    this.el.style.setProperty(`--color-primary`, this.primaryColor);
  }

  render() {
    return (
      <Host>
        <div class="container">
          <div class="header">
            <h1>Theme</h1>
          </div>

          <div class="content" part={this.themed ? 'themed' : ''}>
            <section>
              <p>
                Many elements of the UI Kit can be customized to match a clients brand. This is exposed through the shadowDOM by using the CSS <code>part</code> selector, like so:
              </p>
              <pre>
                <code>
                  {`<section part="themed">
    <railz-button size="small" label="Button Label" type="primary" />
</section>`}
                </code>
              </pre>
            </section>

            <button onClick={() => this.toggleThemed()}>Toggle Theme {this.themed ? 'on' : 'off'}</button>

            <input type="color" name="color-primary" onChange={event => this.updateColors(event)} />

            <p>Primary Color: {this.primaryColor}</p>

            <section>
              <h2>Theme Colors</h2>
              <p>Theme colors are variables that can be defined by the end user, for better brand integration. They have specific uses and applications.</p>
              <ul class="row">
                <li>
                  <color-swatch name="color-primary" colorName="--color-primary" />
                </li>
                <li>
                  <color-swatch name="color-primary-dark" colorName="--color-primary-dark" />
                </li>
                <li>
                  <color-swatch name="color-primary-light" colorName="--color-primary-light" />
                </li>
                <li>
                  <color-swatch name="color-primary-text" colorName="--color-primary-text" />
                </li>
              </ul>
              <ul class="row">
                <li>
                  <color-swatch name="color-accent" colorName="--color-accent" />
                </li>
                {/* <li>
                <color-swatch name="color-accent-dark" colorName="--color-accent-dark" />
              </li>
              <li>
                <color-swatch name="color-accent-light" colorName="--color-accent-light" />
              </li> */}
                <li>
                  <color-swatch name="color-accent-text" colorName="--color-accent-text" />
                </li>
              </ul>
            </section>

            <section>
              <h2>Themed Components</h2>
              <h3>Buttons</h3>
              <div class="row">
                <railz-button size="small" label="Button Label" type="primary" />
                <railz-button size="medium" label="Button Label" type="primary" />
                <railz-button size="large" label="Button Label" type="primary" />
                <railz-button size="x-large" label="Button Label" type="primary" />
              </div>
              <div class="row">
                <railz-button size="small" label="Button Label" type="primary" shape="pill" />
                <railz-button size="medium" label="Button Label" type="primary" shape="pill" />
                <railz-button size="large" label="Button Label" type="primary" shape="pill" />
                <railz-button size="x-large" label="Button Label" type="primary" shape="pill" />
              </div>
              <h3>Form Controls</h3>
              <div class="row">
                <railz-input-checkbox label="I agree to the terms" checked />
                <railz-input-radio checked label="CIBC" value="CIBC" name="financial_institution" />
                <railz-input-toggle label="Automatic Updates" checked />
              </div>
            </section>
          </div>
        </div>
      </Host>
    );
  }
}
