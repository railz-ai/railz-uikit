import { Component, h, State } from '@stencil/core';
import {marked} from "marked";
// import Markdown from 'markdown-to-jsx';

@Component({
  tag: 'page-buttons',
  styleUrl: 'page-buttons.scss',
  shadow: true,
})
export class PageButtons {
  content?: void;
  @State() isLoading: boolean = false;
  @State()
  markdownContent: string = '';
  componentWillLoad() {
    fetch('../readmes/railz-button.md')
      .then(async response => {
        this.markdownContent = marked.parse(await response.text());
      });
  }

  buttonClickTest() {
    this.isLoading = !this.isLoading;
  }

  render() {
    console.log('content', this.content);

    return (
      <div class="container">
        <div class="header">
          <h1>Buttons</h1>
        </div>
        {/* <div class="documentation">Docs {content}</div> */}

        <div class="content">
          <section>
            <p>
              The <strong>button</strong> component is used for both <code>a</code> links and <code>button</code> elements and is specifically meant for things that look like
              traditional buttons. It is not meant to be wrapper around all interactive things, only things that look to the user like a button.
            </p>
            <h2>Primary button</h2>
            <p>
              Out of the box, the <code>railz-button</code> component only requires a <code>label</code> property to present the user with a fully functional button. By default,
              you get a <strong>rounded, medium, primary</strong> button. However, it would still need a <code>target</code> or <code>onClick</code> property passed to it to do
              anything meaningful.
            </p>
            <railz-button label="Click me" onClick={() => this.buttonClickTest()} loading={this.isLoading} />
            <pre>
              <code>{`<railz-button label="Click me"  />`}</code>
            </pre>
          </section>
        </div>

        <section>
          <h2>Customization</h2>
          <p>
            The <strong>button</strong> component can be customized by defining <code>size</code>, <code>type</code>, <code>shape</code>, or by naming an <code>icon</code>. You can
            also tell a button to fill it's available space by setting <code>grow</code>to <code>true</code>, and you can also set <code>disabled</code> and <code>loading</code>
            states.
          </p>
          <div class="samples">
            <div class="sample">
              <h3>Rounded Rectangle</h3>
              <pre>
                <code>{`<railz-button shape="rounded !default" type="primary | secondary"  icon="setup" />`}</code>
              </pre>
              <h4>Small</h4>
              <pre>
                <code>{`size="small"`}</code>
              </pre>

              <div class="row">
                <railz-button size="small" label="Save" type="primary" />
                <railz-button size="small" label="Sign up to learn more" type="secondary" />
                <railz-button size="small" label="Sign Up" type="primary" icon="setup" />
                <railz-button size="small" label="Log in" type="secondary" icon="setup" />
              </div>

              <h4>Medium</h4>
              <pre>
                <code>{`size="medium !default"`}</code>
              </pre>

              <div class="row">
                <railz-button label="Save" type="primary" />
                <railz-button label="Sign up to learn more" type="secondary" />
                <railz-button label="Sign Up" type="primary" icon="setup" />
                <railz-button label="Log in" type="secondary" icon="setup" />
              </div>

              <h4>Large</h4>
              <pre>
                <code>{`size="large"`}</code>
              </pre>

              <div class="row">
                <railz-button label="Save" type="primary" size="large" />
                <railz-button label="Sign up to learn more" type="secondary" size="large" />
                <railz-button label="Sign Up" type="primary" size="large" icon="setup" />
                <railz-button label="Log in" type="secondary" size="large" icon="setup" />
              </div>

              <h4>X-Large</h4>
              <pre>
                <code>{`size="x-large"`}</code>
              </pre>

              <div class="row">
                <railz-button label="Save" type="primary" size="x-large" />
                <railz-button label="Sign up to learn more" type="secondary" size="x-large" />
                <railz-button label="Sign Up" type="primary" size="x-large" icon="setup" />
                <railz-button label="Log in" type="secondary" size="x-large" icon="setup" />
              </div>

              <h4>Full Width</h4>
              <pre>
                <code>{`grow`}</code>
              </pre>

              <div class="row">
                <railz-button label="Sign Up" type="primary" grow />
                <railz-button label="Log in" type="secondary" grow />
                <railz-button label="Sign Up" type="primary" size="large" grow />
                <railz-button label="Log in" type="secondary" size="large" grow />
              </div>
            </div>
            <div class="sample">
              <h3>Pill</h3>
              <pre>
                <code>{`<railz-button shape="pill" type="primary | secondary" icon="setup" />`}</code>
              </pre>
              <h4>Small</h4>
              <pre>
                <code>{`size="small"`}</code>
              </pre>

              <div class="row">
                <railz-button shape="pill" size="small" label="Save" type="primary" />
                <railz-button shape="pill" size="small" label="Sign up to learn more" type="secondary" />
                <railz-button shape="pill" size="small" label="Sign Up" type="primary" icon="setup" />
                <railz-button shape="pill" size="small" label="Log in" type="secondary" icon="setup" />
              </div>

              <h4>Medium</h4>
              <pre>
                <code>{`size="medium !default"`}</code>
              </pre>

              <div class="row">
                <railz-button shape="pill" label="Save" type="primary" />
                <railz-button shape="pill" label="Sign up to learn more" type="secondary" />
                <railz-button shape="pill" label="Sign Up" type="primary" icon="setup" />
                <railz-button shape="pill" label="Log in" type="secondary" icon="setup" />
              </div>

              <h4>Large</h4>
              <pre>
                <code>{`size="large"`}</code>
              </pre>

              <div class="row">
                <railz-button shape="pill" label="Save" type="primary" size="large" />
                <railz-button shape="pill" label="Sign up to learn more" type="secondary" size="large" />
                <railz-button shape="pill" label="Sign Up" type="primary" size="large" icon="setup" />
                <railz-button shape="pill" label="Log in" type="secondary" size="large" icon="setup" />
              </div>

              <h4>X-Large</h4>
              <pre>
                <code>{`size="x-large"`}</code>
              </pre>

              <div class="row">
                <railz-button shape="pill" label="Save" type="primary" size="x-large" />
                <railz-button shape="pill" label="Sign up to learn more" type="secondary" size="x-large" />
                <railz-button shape="pill" label="Sign Up" type="primary" size="x-large" icon="setup" />
                <railz-button shape="pill" label="Log in" type="secondary" size="x-large" icon="setup" />
              </div>

              <h4>Full Width</h4>
              <pre>
                <code>{`grow`}</code>
              </pre>

              <div class="row">
                <railz-button shape="pill" label="Sign Up" type="primary" grow />
                <railz-button shape="pill" label="Log in" type="secondary" grow />
                <railz-button shape="pill" label="Sign Up" type="primary" size="large" grow />
                <railz-button shape="pill" label="Log in" type="secondary" size="large" grow />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>States</h2>
          <h4>Disabled</h4>
          <pre>
            <code>{`disabled`}</code>
          </pre>
          <div class="row">
            <railz-button size="small" label="Button Label" type="primary" isDisabled />
            <railz-button size="small" label="Button Label" type="secondary" isDisabled />
            <railz-button size="small" label="Button Label" type="primary" shape="pill" isDisabled />
            <railz-button size="small" label="Button Label" type="secondary" shape="pill" isDisabled />
          </div>
          <h4>Loading</h4>
          <pre>
            <code>{`loading`}</code>
          </pre>

          <div class="row">
            <railz-button size="small" label="Button Label" type="primary" loading />
            <railz-button size="small" label="Button Label" type="secondary" loading />
            <railz-button size="small" label="Button Label" type="primary" shape="pill" loading />
            <railz-button size="small" label="Button Label" type="secondary" shape="pill" loading />
          </div>
        </section>

        <section part="themed">
          <h2>Themed</h2>
          <p>Primary buttons when used in Railz Connect can pickup a theme color</p>
          {/* <pre>
            <code>{`disabled`}</code>
          </pre> */}
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
        </section>
        <section>
          <h2>Icon Buttons</h2>
          <p>
            Occasionally, the interface design calls for a simple interactive icon. Rather than just adding an <code>onClick</code> event to an <code>railz-icon</code> component,
            it is strongly recommended to use the <code>railz-icon-button</code> component. This component has all of the affordances of a normal button - like focus, disabled, and
            loading states - that are required for creating a rich user experience.
          </p>
          <div class="row">
            <railz-icon-button icon="setup" size="small" label="Button Label" />
            <railz-icon-button icon="setup" size="medium" label="Button Label" />
            <railz-icon-button icon="setup" size="large" label="Button Label" />
            <railz-icon-button icon="setup" size="x-large" label="Button Label" />
          </div>
          <div class="row">
            <railz-icon-button icon="setup" size="small" label="Button Label" shape="circle" />
            <railz-icon-button icon="setup" size="medium" label="Button Label" shape="circle" />
            <railz-icon-button icon="setup" size="large" label="Button Label" shape="circle" />
            <railz-icon-button icon="setup" size="x-large" label="Button Label" shape="circle" />
          </div>
        </section>
        <section>
          <h2>Properties</h2>
          <div innerHTML={this.markdownContent}></div>
        </section>
        <iframe
          width="100%"
          height="1000px"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FVSUSijO0GAHAJa69ICxBDi%2FRailz-Design-System%3Fnode-id%3D239%253A1665"
        ></iframe>
      </div>
    );
  }
}
