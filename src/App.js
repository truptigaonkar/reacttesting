import React,{ Component } from 'react';
import TodoList from './TodoList';

class App extends Component {

  render() {
     
    return (
      <div className="TodoList">
        < TodoList/>
      </div>
    );
  }
}

export default App;
