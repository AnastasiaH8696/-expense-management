/*
----- Developers info -----
Dev1 name: Anastasia Hamandritov
Dev1 ID: 321924433

Dev2 name: Shirel Bitan
Dev2 ID: 209322395
 */

import React from "react";
import "./styles/App.css";
import ExpenseManagement from "./components/ExpenseManagement.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ExpenseManagement />
      </div>
    );
  }
}

export default App;
