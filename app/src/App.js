import React from "react";
import "./styles/App.css";
import ExpenseManagement from "./components/ExpenseManagement.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DisplayFormDataInTable from "./components/DisplayFormDataInTable";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DisplayFormDataInTable />
        <ExpenseManagement name="Nast" />
      </div>
    );
  }
}

export default App;
