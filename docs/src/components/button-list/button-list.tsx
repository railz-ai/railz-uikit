import { Component, h } from '@stencil/core';

@Component({
  tag: 'button-list',
  styleUrl: 'button-list.scss',
  shadow: true,
})
export class ButtonList {
  buttonEvent() {
    alert('Button Clicked!');
  }

  render() {
    return (
      <div class="buttons">
        <div class="group">
          <h2>Rectangle</h2>

          <div class="row">
            <h4>Small</h4>
            <railz-button size="small" label="Save" type="primary" />
            <railz-button size="small" label="Sign up to learn more" type="secondary" />
            <railz-button size="small" label="Sign Up" type="primary" icon="setup" />
            <railz-button size="small" label="Log in" type="secondary" icon="setup" />
          </div>
          <div class="row">
            <h4>Medium</h4>
            <railz-button label="Save" type="primary" />
            <railz-button label="Sign up to learn more" type="secondary" />
            <railz-button label="Sign Up" type="primary" icon="setup" />
            <railz-button label="Log in" type="secondary" icon="setup" />
          </div>
          <div class="row">
            <h4>Large</h4>
            <railz-button label="Save" type="primary" size="large" />
            <railz-button label="Sign up to learn more" type="secondary" size="large" />
            <railz-button label="Sign Up" type="primary" size="large" icon="setup" />
            <railz-button label="Log in" type="secondary" size="large" icon="setup" />
          </div>
          <div class="row">
            <h4>X-Large</h4>
            <railz-button label="Save" type="primary" size="x-large" />
            <railz-button label="Sign up to learn more" type="secondary" size="x-large" />
            <railz-button label="Sign Up" type="primary" size="x-large" icon="setup" />
            <railz-button label="Log in" type="secondary" size="x-large" icon="setup" />
          </div>
          <div class="row">
            <h4>Full Width</h4>
            <railz-button label="Sign Up" type="primary" grow />
            <railz-button label="Log in" type="secondary" grow />
            <railz-button label="Sign Up" type="primary" size="large" grow />
            <railz-button label="Log in" type="secondary" size="large" grow />
          </div>
        </div>
        <div class="group">
          <h2>Pill</h2>

          <div class="row">
            <h4>Medium</h4>
            <railz-button label="Save" type="primary" shape="pill" />
            <railz-button label="Sign up to learn more" type="secondary" shape="pill" />
            <railz-button label="Sign Up" type="primary" shape="pill" icon="setup" />
            <railz-button label="Log in" type="secondary" shape="pill" icon="setup" />
          </div>
          <div class="row">
            <h4>Large</h4>
            <railz-button label="Save" type="primary" size="large" shape="pill" />
            <railz-button label="Sign up to learn more" type="secondary" size="large" shape="pill" />
            <railz-button label="Sign Up" type="primary" size="large" shape="pill" icon="setup" />
            <railz-button label="Log in" type="secondary" size="large" shape="pill" icon="setup" />
          </div>
          <div class="row">
            <h4>X-Large</h4>
            <railz-button label="Save" type="primary" size="x-large" shape="pill" />
            <railz-button label="Sign up to learn more" type="secondary" size="x-large" shape="pill" />
            <railz-button label="Sign Up" type="primary" size="x-large" shape="pill" icon="setup" />
            <railz-button label="Log in" type="secondary" size="x-large" shape="pill" icon="setup" />
          </div>
          <div class="row">
            <h4>Full Width</h4>

            <railz-button label="Sign Up" type="primary" shape="pill" grow />
            <railz-button label="Log in" type="secondary" shape="pill" grow />
            <railz-button label="Sign Up" type="primary" size="large" shape="pill" grow />
            <railz-button label="Log in" type="secondary" size="large" shape="pill" grow />
          </div>
        </div>
        <div class="group">
          <h2>States</h2>
          <div class="row">
            <h4>Disabled</h4>
            <railz-button size="small" label="Button Label" type="primary" isDisabled />
            <railz-button size="small" label="Button Label" type="secondary" isDisabled />
            <railz-button size="small" label="Button Label" type="primary" shape="pill" isDisabled />
            <railz-button size="small" label="Button Label" type="secondary" shape="pill" isDisabled />
          </div>
          <div class="row">
            <h4>Loading</h4>
            <railz-button size="small" label="Button Label" type="primary" loading={true} />
            <railz-button size="small" label="Button Label" type="secondary" loading={true} />
            <railz-button size="small" label="Button Label" type="primary" shape="pill" loading={true} />
            <railz-button size="small" label="Button Label" type="secondary" shape="pill" loading={true} />
          </div>
        </div>
      </div>
    );
  }
}
