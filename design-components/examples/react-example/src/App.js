import './App.css';
import { RailzLogo } from '@railzai/railz-uikit-react';

function App() {
  const imageLoaded = () => {
    console.log('loaded');
  };

  return (
    <div className="App">
      <RailzLogo name="freshbooks" onImageLoad={imageLoaded()} />
    </div>
  );
}

export default App;
