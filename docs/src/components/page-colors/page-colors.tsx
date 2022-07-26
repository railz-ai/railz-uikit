import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-colors',
  styleUrl: 'page-colors.scss',
  shadow: true,
})
export class PageColors {
  render() {
    return (
      <div class="container">
        <div class="header">
          <h1>Colors</h1>
        </div>

        <div class="content">
          <section>
            <h2>Usage</h2>
            <p>
              <strong>Colors</strong> are defined in <code>uikit/tokens/_colors.scss</code> in the <code>$colors</code> list. They are defined using HSL values, and each color hue
              contains a list lightness swatches.
            </p>

            <p>
              Colors can be accessed by using the <code>color()</code> SCSS fucntion as defined in <code>uikit/helpers/_colors.scss</code>
            </p>

            <p>
              The <code>color()</code> function can be called by passing the name of the color plus the lightness swatch:
            </p>

            <pre>
              <code>color: color('gray-800')</code>
            </pre>

            <p>It also takes an optional opacity value from 0 - 1, if you'd like to make the color more transparent.</p>

            <pre>
              <code>color: color('blue-400', .5)</code>
            </pre>
          </section>
          <section>
            <h2>Applications</h2>
            <p>These colors are subset of the Full Palette for specific brand applications</p>
            <h3>Brand Colors</h3>
            <ul class="row">
              <li>
                <color-swatch name="color-brand-primary" colorName="neon_green-700" />
              </li>
              <li>
                <color-swatch name="color-brand-cta" colorName="neon_green-800" />
              </li>
              <li>
                <color-swatch name="color-brand-dark" colorName="aqua-900" />
              </li>
            </ul>
            <h3>Theme Colors</h3>
            <p>Theme colors are variables that can be defined by the end user, for better brand integration. They have specific uses and applications.</p>
            <ul class="row" part="themed">
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
            <ul class="row" part="themed">
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

            <h3>Text Colors</h3>
            <h4>Branded Colors</h4>
            <ul class="row col-2">
              <li>
                <div class="text-sample on-white">
                  <span class="text-primary">Primary Text On White</span>
                  <span class="text-secondary">Secondary Text</span>
                  <span class="text-tertiary">Tertiary Text</span>
                  <span class="text-highlight">Highlight Text</span>
                </div>
              </li>
              <li>
                <div class="text-sample on-gray">
                  <span class="text-primary">Primary Text on Gray</span>
                  <span class="text-secondary">Secondary Text</span>
                  <span class="text-tertiary">Tertiary Text</span>
                  <span class="text-highlight">Highlight Text</span>
                </div>
              </li>
              <li>
                <div class="text-sample on-dark">
                  <span class="text-primary">Primary Text on Dark Green</span>
                  <span class="text-secondary">Secondary Text</span>
                  <span class="text-tertiary">Tertiary Text</span>
                  <span class="text-highlight">Highlight Text</span>
                </div>
              </li>
              <li>
                <div class="text-sample on-green">
                  <span class="text-primary">Primary Text on Green</span>
                  <span class="text-secondary">Secondary Text</span>
                  <span class="text-tertiary">Tertiary Text</span>
                  <span class="text-highlight">Highlight Text</span>
                </div>
              </li>
              <li>
                <div class="text-sample on-dark-gray">
                  <span class="text-primary">Primary Text on Dark Gray</span>
                  <span class="text-secondary">Secondary Text</span>
                  <span class="text-tertiary">Tertiary Text</span>
                  <span class="text-highlight">Highlight Text</span>
                </div>
              </li>
            </ul>
            <h4>Themed Colors</h4>
            <ul class="row col-2" part="themed">
              <li>
                <div class="text-sample on-white">
                  <span class="text-primary">Primary Text</span>
                  <span class="text-secondary">Secondary Text</span>
                  <span class="text-tertiary">Tertiary Text</span>
                  <span class="text-highlight">Highlight Text</span>
                </div>
              </li>
              <li>
                <div class="text-sample on-primary">
                  <span class="text-primary">Primary Text</span>
                </div>
              </li>
              <li>
                <div class="text-sample on-accent">
                  <span class="text-primary">Primary Text</span>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div class="sample">
          <section>
            <h2>Full Palette</h2>
            <color-swatch-list />
          </section>
        </div>

        <iframe
          width="100%"
          height="1000px"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FVSUSijO0GAHAJa69ICxBDi%2FRailz-Design-System%3Fnode-id%3D1185%253A7619"
        ></iframe>
      </div>
    );
  }
}
