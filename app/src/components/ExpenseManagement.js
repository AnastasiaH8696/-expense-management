import React from "react";
import ExpensesList from "./ExpensesList";
import Report from "./Report";
import { AsyncLocalStorage } from "../storage/AsyncLocalStorage";

class ExpenseManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expenses: [] };
  }

  componentDidMount() {
    AsyncLocalStorage.getItem("expenses").then((expenses) => {
      this.setState({ expenses });
    });
  }

  render() {
    const { expenses } = this.state;
    return (
      <div className="expense-management">
        {expenses == null || expenses.length === 0 ? (
          <p></p>
        ) : (
          <ExpensesList expenses={JSON.parse(expenses)} />
        )}
        <Report />
      </div>
    );
  }
}

export default ExpenseManagement;
