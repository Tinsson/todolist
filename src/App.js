import React, { Component } from 'react';
import Todolist from './containers/Todolist'
import R_todo from './reducers/R_todo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css';

const store = createStore(R_todo);

class App extends Component {
  render() {
    return (
      <div className="App">
          <Provider store={store}>
            <Todolist/>
          </Provider>
      </div>
    );
  }
}

export default App;
