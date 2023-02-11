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

  updateExpenses = (newExpenses) => {
    this.setState({ expenses: newExpenses });
  };

  render() {
    const { expenses } = this.state;
    return (
      <div className="expense-management">
        {expenses == null || expenses.length === 0 ? (
          <div>
            <ExpensesList expenses={[]} updateExpenses={this.updateExpenses} />
            <p></p>
          </div>
        ) : (
          <div>
            <ExpensesList
              expenses={JSON.parse(expenses)}
              updateExpenses={this.updateExpenses}
            />
            <Report expenses={JSON.parse(expenses)} />
          </div>
        )}
      </div>
    );
  }
}

export default ExpenseManagement;
