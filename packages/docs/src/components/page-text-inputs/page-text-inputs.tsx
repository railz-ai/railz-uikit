import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-text-inputs',
  styleUrl: 'page-text-inputs.scss',
  shadow: true,
})
export class PageTextInputs {
  render() {
    return (
      <div class="container">
        <div class="header">
          <h1>Text Inputs</h1>
        </div>
        <div class="content">
          <section>
            <p>
              <strong>Text inputs</strong> can be tricky elements to integrate, with a myriad of attributes for as multitude of use cases. The <code>{`<railz-input-text />`}</code>
              component attempts to address many of the most common applications of a text input.
            </p>
            <h2>Text Text Input Component</h2>
            <p>
              The <strong>text-input</strong> component can receive a long list of properties, but the only mandatory one is the <code>label</code>.
            </p>
            <div class="group">
              <railz-input-text label="Address" placeholder="345 Lichfeild" instructionalText="Enter your address" />
              <pre>
                <code>{`<railz-input-text label="Address" placeholder="345 Lichfeild" instructionalText="Enter your address" />`}</code>
              </pre>
            </div>
          </section>
        </div>
        <section>
          <div class="sample">
            <h2>States and Variations</h2>

            <h3>Error</h3>
            <p>If an error message is passed to the input component, it will display an error state</p>
            <div class="group">
              <railz-input-text label="Address" placeholder="345 Lichfeild" instructionalText="Enter your address" errorMessage="Your address is incorrect" />
              <pre>
                <code>{`<railz-input-text label="Address" placeholder="345 Lichfeild" instructionalText="Enter your address" errorMessage="Your address is incorrect" />`}</code>
              </pre>
            </div>
          </div>
        </section>
        <section>
          <div class="sample">
            <h3>Input Types, Modes & Autocomplete</h3>
            <p>
              Choosing the correct type, inputmode, and autocomplete values is critical to providing users with a quality user experience. The effects are most visible on mobile
              devices where the virtual keyboard can be customized to optimize input.
            </p>
            <p>
              The <code>railz-input-text</code> component can receive all standard values for <code>type</code>, <code>inputmode</code>, <code>autocomplete</code>,
              <code>pattern</code>, <code>min & max</code>. Check out the documentation on MDN for more details.
            </p>
            <div class="columns">
              <div class="group">
                <railz-input-text label="Phone Number" placeholder="416-555-5555" type="tel" autocomplete="tel" inputmode="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                <pre>
                  <code>{`<railz-input-text label="Phone Number" placeholder="416-555-5555" type="tel" autocomplete="tel" inputmode="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />`}</code>
                </pre>
                <img src="../assets/keyboard-tel.png" />
              </div>
              <div class="group">
                <railz-input-text label="Email" placeholder="zach@railz.ai" type="email" autocomplete="email" />
                <pre>
                  <code>{`<railz-input-text label="Email" placeholder="zach@railz.ai" type="email"  autocomplete="email" />`}</code>
                </pre>
                <img src="../assets/keyboard-email.png" />
              </div>
              <div class="group">
                <railz-input-text label="Contact name" placeholder="John Doe" type="text" autocomplete="name" />
                <pre>
                  <code>{`<railz-input-text label="Contact name" placeholder="John Doe" type="text"  autocomplete="name" />`}</code>
                </pre>
                <img src="../assets/keyboard-name.png" />
              </div>
              <div class="group">
                <railz-input-text label="Decimal Amount" placeholder="47.5" inputmode="decimal" />
                <pre>
                  <code>{`<railz-input-text label="Decimal Amount" placeholder="47.5" inputmode="decimal" />`}</code>
                </pre>
              </div>
              <div class="group">
                <railz-input-text label="Number Amount" placeholder="47.5" inputmode="numeric" type="number" minNumber="-5" maxNumber="5" />
                <pre>
                  <code>{`<railz-input-text label="Number Amount" placeholder="47.5" inputmode="numeric" type="number" minNumber="-5" maxNumber="5" />`}</code>
                </pre>
              </div>
              <div class="group">
                <railz-input-text label="Company Website" placeholder="www.railz.ca" inputmode="url" type="url" />
                <pre>
                  <code>{`<railz-input-text label="Website" placeholder="www.railz.ca" inputmode="url" type="url" />`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="sample">
            <h2>Adornments</h2>
            <p>
              The <strong>text-input</strong> component can also display prefix or suffix elements.
            </p>
            <p>
              The adornments can either be text, icons, interactive elements, or basically any valid HTML.The prefix adornment is hidden unless the input is focused or filled. If
              you need an icon to be visible at all times, consider using the <code>prefix-icon</code> property.
            </p>
            <div class="group">
              <railz-input-text label="Website" placeholder="345 Lichfeild" instructionalText="Enter your wesbite">
                <span slot="prefix">https://</span>
                <railz-icon icon="api_keys" slot="suffix" size="medium" />
              </railz-input-text>
              <pre>
                <code>{`<railz-input-text label="Website" placeholder="345 Lichfeild" instructionalText="Enter your wesbite">
    <span slot="prefix">https://</span>
    <railz-icon icon="api_keys" slot="suffix" size="medium" />
</railz-input-text>`}</code>
              </pre>
            </div>
            <div class="group">
              <p>
                Specifying the <strong>prefix-icon</strong> is the easiest way to add an icon to the front of a text input. It will be size appropriately, and is styled to reflect
                the state of the input.
              </p>
              <railz-input-text label="Bank Name" placeholder="TD Canada Trust" prefixIcon="banking" errorMessage="Thats not a bank">
                <railz-button shape="pill" slot="suffix" label="Search" type="primary" size="small" />
              </railz-input-text>
              <pre>
                <code>{`<railz-input-text label="Bank Name" placeholder="TD Canada Trust" prefixIcon="banking" errorMessage="Thats not a bank">
    <railz-button slot="suffix" label="Search" type="primary" size="small" />
</railz-input-text>`}</code>
              </pre>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
