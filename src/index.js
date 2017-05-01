/**
 * Created by Chunxu on 2017/2/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

import App from './components/App';
import reducers from './reducers';


const socket = io(`${location.protocol}//${location.hostname}`);
const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

let store = applyMiddleware(socketIoMiddleware)(createStore)(reducers);
store.subscribe(() => {
  console.log('new client state', store.getState());
});
// store.dispatch({
//   type: 'server/hello',
//   data: 'Hello'
// });


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('.react-container')
);


// class HelloMessage extends React.Component {
//   render() {
//     return <div>Hello</div>;
//   }
// }
//
// ReactDOM.render(<HelloMessage/>, document.querySelector('.container'));


