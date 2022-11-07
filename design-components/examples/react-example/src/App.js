import './App.css';
import { RailzLogo, RailzNavigationProgressBar } from '@railzai/railz-uikit-react';

function App() {
  const imageLoaded = () => {
    console.log('loaded');
  };

  return (
    <div className="App">
      <RailzLogo name="freshbooks" onImageLoad={imageLoaded()} />
      <RailzNavigationProgressBar
        pages={[
          { name: 'Step 1', state: 'success' },
          { name: 'Step 2', state: 'skipped' },
          { name: 'Step 3', state: 'current' },
          { name: 'Step 4', state: 'pending' },
          { name: 'Step 6', state: 'pending' },
          { name: 'Step 7', state: 'success' },
          { name: 'Step 8', state: 'skipped' },
        ]}
      />
    </div>
  );
}

export default App;
