import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import globalStore from '../shared/redux/global-store';
import App from './components/App';

// stylesheets
import '../shared/styles/common.css';

ReactDOM.render(
  <Provider store={globalStore}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
);
