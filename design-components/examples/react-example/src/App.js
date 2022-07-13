import logo from './logo.svg';
import './App.css';
import {
  RailzButton,
  RailzComponent,
  RailzInputText,
  RailzNested,
  RailzNestedSum,
} from '@railzai/railz-uikit-react';

import { useState } from 'react';

function App() {
  const buttonClick = () => {
    console.log('button clicked');
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
    console.log('updateTheme', event);
  };

  const [buttonTheme, setButtonTheme] = useState('primary');
  const [disableButton, setDisableButton] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
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
      </header>

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
        onButtonClick={() => setDisableButton(true)}
      />

      <RailzInputText label="set theme" onValueChange={(e) => updateTheme(e)} />
      <RailzNestedSum first={12} second={30} />

      <input
        type="text"
        value={buttonTheme}
        onChange={(e) => updateTheme(e)}
        placeholder="button theme"
      />
    </div>
  );
}

export default App;
