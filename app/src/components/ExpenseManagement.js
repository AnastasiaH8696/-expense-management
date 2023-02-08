import React from "react";
import ExpensesList from "./ExpensesList";
import Report from "./Report";
import { CATEGORIES } from "../consts/Categories";

class ExpenseManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //This is just a placeholder! will be updated!  
      expenses: [
        {
          title: "expense1",
          description: "desc1",
          category: CATEGORIES[0],
          date: "date1",
        },
        {
          title: "expense2",
          description: "desc2",
          category: CATEGORIES[1],
          date: "date2",
        },
      ],
    };
  }

  render() {
    return (
      <div className="expense-management">
        <ExpensesList expenses={this.state.expenses} />
        <Report />
      </div>
    );
  }
}

export default ExpenseManagement;
