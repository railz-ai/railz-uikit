// import logo from './logo.svg';
import './App.css';
import {
  // RailzButton,
  // RailzComponent,
  // RailzInputText,
  RailzLogo,
  // RailzNested,
  // RailzIcon,
  RailzNavigationProgressBar,
  // RailzNestedSum,
} from '@railzai/railz-uikit-react';

import { useState } from 'react';

function App() {
  const [pages, setPages] = useState([
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
  ]);
  const buttonClick = () => {
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
    setButtonTheme(event.detail);
  };

  const imageLoaded = () => {
    console.log('loaded');
  };

  const [buttonTheme, setButtonTheme] = useState('primary');
  const [disableButton, setDisableButton] = useState(true);

  const updatePages = (page) => {
    const newPages = pages.map((page) => ({
      ...page,
      state: page.state === 'current' ? 'skipped' : page.state,
    }));

    const index = newPages.findIndex((p) => p.name === page.name);

    newPages[index].state = 'current';

    setPages(newPages);

    console.table(pages);
  };

  return (
    <div className="App">
      {/* <RailzInputText label="set theme" onValueChange={(e) => updateTheme(e)} prefixIcon="home" /> */}

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
      {/* <RailzButton
        label="Theme Button"
        type={buttonTheme}
        isDisabled={disableButton}
        buttonClass="custom-button-class"
        onButtonClick={() => buttonClick()}
      />

      <RailzButton
        label="Unluck the Theme Button"
        type={buttonTheme}
        buttonClass="custom-button-class"
        onButtonClick={() => setDisableButton(false)}
      /> */}

      {/* <RailzNestedSum first={12} second={30} /> */}

      {/* <RailzIcon icon="home" size="small" /> */}

      {/* <p>{JSON.stringify(pages)}</p>
      <RailzNavigationProgressBar pages={pages} /> */}

      {/* <RailzButton onButtonClick={() => updatePages({ name: 'Overview' })} label="Go To Overview" />
      <RailzButton
        onButtonClick={() => updatePages({ name: 'Accounting' })}
        label="Go To Accounting"
      />
      <RailzButton onButtonClick={() => updatePages({ name: 'Banking' })} label="Go To Banking" />
      <RailzButton onButtonClick={() => updatePages({ name: 'Commerce' })} label="Go To Commerce" />
      <RailzButton onButtonClick={() => updatePages({ name: 'Summary' })} label="Go To Summary" /> */}

      <RailzLogo name="freshbooks" onImageLoad={imageLoaded()} />
    </div>
  );
}

export default App;
