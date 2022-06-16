import logo from './logo.svg';
import './App.css';
import {RailzComponent, RailzNested, RailzNestedSum} from '@railzai/railz-uikit-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Railz Component</h2>
        <RailzComponent first="Sade" middle="Tola" last="Adu"/>
        <h2>Railz Nested</h2>
        <RailzNested sumList={[{first: 12, second: 10}, {first: 40, second: 50}, {first: 2, second: 3}, {first: null, second: 3}]}/>
        <h3>Railz Nested Sum</h3>
        <RailzNestedSum first={12} second={30}/>
      </header>
    </div>
  );
}

export default App;
