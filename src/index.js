import React from 'react';
import ReactDOM from 'react-dom';
import RootApp from './App';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
  	<AppContainer>
      <Component />
  </AppContainer>,
    document.getElementById('root')
  );
};

render(RootApp);

module.hot.accept('./RootApp', () => {
  render(RootApp)
});

