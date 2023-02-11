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
        date: new Date().toLocaleDateString(),
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
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const checkEmptyInput = !Object.values(this.state.formInputData).every(
        (res) => res === ""
      );
      if (checkEmptyInput) {
        const newData = JSON.stringify([...this.props.expenses, this.state.formInputData]);
        const emptyInput = {
          title: "",
          category: "",
          price: "",
          date: new Date().toLocaleDateString(),
        };
        this.setState({ formInputData: emptyInput });
        AsyncLocalStorage.setItem("expenses", newData);
        this.props.updateExpenses(newData);
      }
    };

    return (
      <React.Fragment>
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
