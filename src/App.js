import React from 'react';
import { Provider } from 'react-redux';

import store from './store/index';
import GlobalStyle from './styles/global';
import Repositories from './components/Repositories/index';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Repositories />
    </Provider>
  );
}

export default App;
