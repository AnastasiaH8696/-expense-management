import React from "react";
import Expense from "./Expense";
import NewExpense from "./NewExpense";

class ExpensesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expenses: this.props.expenses};
  }

  render() {
    return (
      <div className="expenses-list">
        <NewExpense />
        {this.state.expenses.map((expense) => (
        <Expense
          title={expense.title}
          price={expense.price}
          category={expense.category}
          date={expense.date}
        />
      ))}
      </div>
    );
  }
}

export default ExpensesList;
