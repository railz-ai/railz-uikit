import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-typography',
  styleUrl: 'page-typography.scss',
  shadow: true,
})
export class PageTypography {
  public fontSizes = [
    { size: '6', value: 'rem(6px)' },
    { size: '8', value: 'rem(8px)' },
    { size: '10', value: 'rem(10px)' },
    { size: '12', value: 'rem(12px)' },
    { size: '14', value: 'rem(14px)' },
    { size: '15', value: 'rem(15px)' },
    { size: '16', value: 'rem(16px)' },
    { size: '18', value: 'rem(18px)' },
    { size: '20', value: 'rem(20px)' },
    { size: '24', value: 'rem(24px)' },
    { size: '32', value: 'rem(32px)' },
    { size: '40', value: 'rem(40px)' },
    { size: '48', value: 'rem(48px)' },
    { size: '56', value: 'rem(56px)' },
    { size: '64', value: 'rem(64px)' },
    { size: '80', value: 'rem(80px)' },
    { size: '96', value: 'rem(96px)' },
    { size: '120', value: 'rem(120px)' },
    { size: '136', value: 'rem(136px)' },
  ];

  public fontWeights = [
    { weight: 'thin', value: '100' },
    { weight: 'extra-light', value: '200' },
    { weight: 'light', value: '300' },
    { weight: 'regular', value: '400' },
    { weight: 'medium', value: '500' },
    { weight: 'semi-bold', value: '600' },
    { weight: 'bold', value: '700' },
    { weight: 'extra-bold', value: '800' },
    { weight: 'black', value: '900' },
  ];

  public lineHeights = [
    { name: 'single', value: ' 1' },
    { name: 'small', value: ' 1.2' },
    { name: 'normal', value: ' 1.6' },
    { name: 'large', value: ' 1.8' },
  ];

  render() {
    return (
      <div class="container">
        <div class="header">
          <h1>Typography</h1>
        </div>

        <div class="typography-content">
          <div class="column">
            <section class="family">
              <h2>Font Family</h2>
              <div class="font-family-card">
                <div class="stack">
                  <span class="label">'Inter', 'Helvetica', sans-serif</span>
                  <code>font-family('main')</code>
                </div>
                <div class="sample">
                  <ul class="specimen">
                    <li>
                      <span>A</span>
                      <span>a</span>
                    </li>
                    <li>
                      <span>B</span>
                      <span>b</span>
                    </li>
                    <li>
                      <span>C</span>
                      <span>c</span>
                    </li>
                    <li>
                      <span>D</span>
                      <span>d</span>
                    </li>
                  </ul>
                  <span class="uppercase">abcdefghijklmnopqrstuvwxyz</span>
                  <span class="lowercase">abcdefghijklmnopqrstuvwxyz</span>
                  <span class="numbers">0123456789</span>
                </div>
              </div>
            </section>

            <section class="weights">
              <h2>Font Weights</h2>
              <ul class="font-weights">
                {this.fontWeights.map(fontWeight => (
                  <li class={`font-weight-${fontWeight.weight}`}>
                    <div>
                      <span class="preview">Aa</span>
                    </div>
                    <pre>
                      <code>font-weight('{fontWeight.weight}')</code>
                      <span class="value">{fontWeight.value}</span>
                    </pre>
                  </li>
                ))}
              </ul>
            </section>
            <section class="line-heights">
              <h2>Line Heights</h2>
              <ul class="line-heights">
                {this.lineHeights.map(lineHeight => (
                  <li class={`line-height-${lineHeight.name}`}>
                    <div>
                      <span class="preview">abcdefghijklmnopqrstuvwxyz</span>
                      <span class="preview">abcdefghijklmnopqrstuvwxyz</span>
                      <span class="preview">abcdefghijklmnopqrstuvwxyz</span>
                      <span class="preview">abcdefghijklmnopqrstuvwxyz</span>
                    </div>
                    <pre>
                      <code>line-height('{lineHeight.name}')</code>
                      <span class="value">{lineHeight.value}</span>
                    </pre>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <section class="sizes">
            <h2>Font Sizes</h2>
            <ul class="font-sizes">
              {this.fontSizes.map(fontSize => (
                <li class={`font-size-${fontSize.size}`}>
                  <span class="preview">Aa</span>
                  <pre>
                    <code>font-size({fontSize.size})</code>
                    <span class="value">{fontSize.value}</span>
                  </pre>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}
