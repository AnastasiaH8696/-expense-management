import React from "react";
import NewReport from "./NewReport";
import ExpensesTable from "./ExpenseTable";

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
      formInputData: {
        from: "",
        to: "",
      },
    };
  }

  render() {
    const { expenses } = this.props;
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
        const from = new Date(this.state.formInputData.from).toLocaleDateString();
        const to = new Date(this.state.formInputData.to).toLocaleDateString();
        const data = expenses.filter((expense) => {
          return (
            expense.date >= from &&
            expense.date <= to
          );
        });
        this.setState({ filtered: data });
        const emptyInput = {
          from: "",
          to: "",
        };
        this.setState({ formInputData: emptyInput });
      }
    };
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <NewReport
                handleChange={handleChange}
                formInputData={this.state.formInputData}
                handleSubmit={handleSubmit}
              />
              <ExpensesTable tableData={this.state.filtered} />
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Report;
