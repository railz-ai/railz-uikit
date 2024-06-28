import { Component, h } from '@stencil/core';

const possibleStates = ['pending', 'current', 'success', 'skipped', 'pending'];
const stepState = {
  overview: 'current',
  accounting: 'current',
  banking: 'pending',
  commerce: 'pending',
  summary: 'pending',
};

const steps = ['Overview', 'Accounting', 'Banking', 'Commerce', 'Summary'];

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

          <section>
            <h2 class="section-title">Navigation Progress Bar</h2>
            <railz-navigation-progress-bar
              pages={steps.map(name => ({
                name,
                state: stepState[name],
                onClick: () => {
                  const current = possibleStates.findIndex(s => s === stepState[name]);
                  stepState[name] = possibleStates[current + 1];
                  console.log(`🐛 | steps:`, { name, stepState: stepState[name] });
                },
              }))}
            />
          </section>
        </div>
      </div>
    );
  }
}
