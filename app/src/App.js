import React from 'react';
import './styles/App.css';
import ExpenseManagement from './components/ExpenseManagement.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ExpenseManagement name='Nast' />
      </div>
    );
  }
}

export default App;
