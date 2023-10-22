import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-form-controls',
  styleUrl: 'page-form-controls.scss',
  shadow: true,
})
export class PageFormControls {
  public radioOptions = [
    { label: 'Apple', name: 'phone', value: 'Apple' },
    { label: 'Google', name: 'phone', value: 'Google' },
    { label: 'Samsung', name: 'phone', value: 'Samsung' },
  ];

  render() {
    return (
      <div class="container">
        <div class="header">
          <h1>Form Controls</h1>
        </div>
        <section>
          <div class="columns">
            <div class="group">
              <h3>Checkbox</h3>
              <div class="column">
                <railz-input-checkbox label="I agree to the terms" />
                <railz-input-checkbox label="I agree to the terms" checked />
                <railz-input-checkbox label="I agree to the terms" disabled />
                <railz-input-checkbox label="I agree to the terms" checked disabled />
                <railz-input-checkbox label="I agree to the terms" indeterminate />
              </div>
              <div class="column">
                <railz-input-checkbox label="I agree to the terms" instructionalText="I have read the terms and conditions" />
                <railz-input-checkbox label="I agree to the terms" instructionalText="I have read the terms and conditions" error />
                <railz-input-checkbox label="I agree to the terms" instructionalText="I have read the terms and conditions" error errorMessage="You must agree to the terms" />
              </div>
              <div class="column">
                <railz-input-checkbox label="I agree to the terms" error />
                <railz-input-checkbox label="I agree to the terms" error errorMessage="You must agree to the terms" />
              </div>
            </div>
            <div class="group">
              <h3>Radio Input</h3>
              <div class="column">
                <h4>Group 1</h4>
                <railz-input-radio checked label="CIBC" value="CIBC" name="financial_institution" />
                <railz-input-radio label="TD Bank" value="TD" name="financial_institution" />
                <railz-input-radio label="RBC" value="RBC" name="financial_institution" />
                <railz-input-radio label="Scotiabank" value="Scotiabank" name="financial_institution" disabled />
                <h4>Group 2</h4>
                <railz-input-radio checked label="CIBC" value="CIBC" name="fi2" instructionalText="Make sure you have access to this bank" />
                <railz-input-radio label="TD Bank" value="TD" name="fi2" instructionalText="Make sure you have access to this bank" />
                <railz-input-radio label="RBC" value="RBC" name="fi2" instructionalText="Make sure you have access to this bank" />
                <railz-input-radio label="Scotiabank" value="Scotiabank" checked name="fi2" instructionalText="Make sure you have access to this bank" disabled />

                <h4>Radio Input Group</h4>
                <railz-input-radio-group options={this.radioOptions}></railz-input-radio-group>
              </div>
            </div>
            <div class="group">
              <h3>Toggle Input</h3>
              <div class="column">
                <railz-input-toggle label="Automatic Updates" />
                <railz-input-toggle label="Automatic Updates" checked />
                <railz-input-toggle label="Automatic Updates" disabled />
                <railz-input-toggle label="Automatic Updates" checked disabled />
                <railz-input-toggle label="Automatic Updates" indeterminate />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
