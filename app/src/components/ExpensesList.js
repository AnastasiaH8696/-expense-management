/*
----- Developers info -----
Dev1 name: Anastasia Hamandritov
Dev1 ID: 321924433

Dev2 name: Shirel Bitan
Dev2 ID: 209322395
 */

import React from "react";
import NewExpense from "./NewExpense";
import ExpensesTable from "./ExpenseTable";
import { AsyncLocalStorage } from "../storage/AsyncLocalStorage";
class ExpensesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formInputData: {
        title: "",
        category: "",
        price: "",
        date: "",
      },
    };
  }

  render() {
    const handleChange = (event) => {
      this.setState({
        formInputData: {
          ...this.state.formInputData,
          [event.target.name]: event.target.value,
        },
      });
    };

    const isValidInput = (input) => {
      if (
        input.title === "" ||
        input.category === "" ||
        input.price === "" ||
        input.date === ""
      ) {
        alert("Fill empty fields");
        return false;
      }

      if (isNaN(input.price)) {
        alert("Price is not a number");
        return false;
      }

      if (!isNaN(input.price) && parseFloat(input.price) <= 0) {
        alert("Price should be bigger than 0");
        return false;
      }

      const inputDate = new Date(input.date);
      const currentDate = new Date();

      if (inputDate > currentDate) {
        alert("You cannot use a future date");
        return false;
      }

      return true;
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const checkEmptyInput = !Object.values(this.state.formInputData).every(
        (res) => res === ""
      );
      if (checkEmptyInput) {
        const newData = JSON.stringify([
          ...this.props.expenses,
          this.state.formInputData,
        ]);
        const emptyInput = {
          title: "",
          category: "",
          price: "",
          date: new Date().toLocaleDateString(),
        };

        if (isValidInput(this.state.formInputData)) {
          this.setState({ formInputData: emptyInput });
          AsyncLocalStorage.setItem("expenses", newData);
          this.props.updateExpenses(newData);
        }
      } else {
        alert("Fill empty fields");
      }
    };

    return (
      <React.Fragment>
        <h1 class="display-3 text-center">Expense Management Tool</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <NewExpense
                handleChange={handleChange}
                formInputData={this.state.formInputData}
                handleSubmit={handleSubmit}
              />
              <ExpensesTable tableData={this.props.expenses} />
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ExpensesList;
