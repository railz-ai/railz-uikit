
import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';
import App from '/home/runner/work/railz-uikit/railz-uikit/docs/node_modules/component-docs/dist/templates/App.js';
import data from './app.data';
import '/home/runner/work/railz-uikit/railz-uikit/docs/node_modules/component-docs/dist/styles/reset.css';
import '/home/runner/work/railz-uikit/railz-uikit/docs/node_modules/component-docs/dist/styles/globals.css';

import '/home/runner/work/railz-uikit/railz-uikit/docs/assets/styles.css';

const root = document.getElementById('root');
const render = () => {
  try {
    ReactDOM.hydrate(
      <App
        name={window.__INITIAL_PATH__}
        data={data}
        github={"https://github.com/railz-ai/railz-uikit"}
        logo={"images/railz-logo.svg"}
        title={"[title] · Railz UI Kit"}
      />,
      root
    );
  } catch (e) {
    ReactDOM.render(
      <RedBox error={e} />,
      root
    );
  }
};

if (module.hot) {
  module.hot.accept(() => {
    render();
  });
}

render();
