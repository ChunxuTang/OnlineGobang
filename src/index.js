/**
 * Created by Chunxu on 2017/2/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App/>
  </Provider>,
  document.querySelector('.container')
);


// class HelloMessage extends React.Component {
//   render() {
//     return <div>Hello</div>;
//   }
// }
//
// ReactDOM.render(<HelloMessage/>, document.querySelector('.container'));


