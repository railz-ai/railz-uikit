// import logo from './logo.svg';
import './App.css';
import {
  RailzButton,
  // RailzComponent,
  RailzInputText,
  // RailzNested,
  RailzIcon,
  RailzNavigationProgressBar,
  // RailzNestedSum,
} from '@railzai/railz-uikit-react';

import { useState } from 'react';

function App() {
  const buttonClick = () => {
    // console.log('button clicked');
    setButtonTheme('themed');

    if (buttonTheme === 'primary') {
      setButtonTheme('themed');
    } else if (buttonTheme === 'themed') {
      setButtonTheme('secondary');
    } else {
      setButtonTheme('primary');
    }
  };

  const updateTheme = (event) => {
    // console.log('event', event);
    // console.log('event.target', event.target);
    // console.log('event.target.value', event.target.value);
    // console.log('event.detail', event.detail);
    setButtonTheme(event.detail);
  };

  const [buttonTheme, setButtonTheme] = useState('primary');
  const [disableButton, setDisableButton] = useState(true);

  const pages = [
    {
      name: 'Overview',
      state: 'success',
    },
    {
      name: 'Accounting',
      state: 'skipped',
    },
    {
      name: 'Banking',
      state: 'success',
    },
    {
      name: 'Commerce',
      state: 'current',
    },
    {
      name: 'Summary',
    },
  ];

  const updatePages = (page) => {
    console.log({ page });

    this.pages4 = this.pages4.map((page) => ({
      ...page,
      state: page.state === 'current' ? 'skipped' : page.state,
    }));

    const index = this.pages4.findIndex((p) => p.name === page.name);

    this.pages4[index].state = 'current';

    console.table(this.pages4);
  };

  return (
    <div className="App">
      <RailzInputText label="set theme" onValueChange={(e) => updateTheme(e)} prefixIcon="home" />

      {/* <input type="text" onInput={(e) => updateTheme(e)} placeholder="button theme" /> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Railz Component</h2>
        <RailzComponent first="Sade" middle="Tola" last="Adu" />
        <h2>Railz Nested</h2>
        <RailzNested
          sumList={[
            { first: 12, second: 10 },
            { first: 40, second: 50 },
            { first: 2, second: 3 },
            { first: null, second: 3 },
          ]}
        />
        <h3>Railz Nested Sum</h3>
      </header> */}

      <p>Button theme {buttonTheme}</p>
      <RailzButton
        label="Theme Button"
        type={buttonTheme}
        isDisabled={disableButton}
        onButtonClick={() => buttonClick()}
      />

      <RailzButton
        label="Unluck the Theme Button"
        type={buttonTheme}
        onButtonClick={() => setDisableButton(false)}
      />

      {/* <RailzNestedSum first={12} second={30} /> */}

      {/* <RailzIcon icon="home" size="small" /> */}

      <RailzNavigationProgressBar pages={pages} />

      <railz-button
        onButtonClick={() => updatePages({ name: 'Overview' })}
        label="Go To Overview"
      />
      <railz-button
        onButtonClick={() => updatePages({ name: 'Accounting' })}
        label="Go To Accounting"
      />
      <railz-button onButtonClick={() => updatePages({ name: 'Banking' })} label="Go To Banking" />
      <railz-button
        onButtonClick={() => updatePages({ name: 'Commerce' })}
        label="Go To Commerce"
      />
      <railz-button onButtonClick={() => updatePages({ name: 'Summary' })} label="Go To Summary" />
    </div>
  );
}

export default App;
