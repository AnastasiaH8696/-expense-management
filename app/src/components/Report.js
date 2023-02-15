/*
----- Developers info -----
Dev1 name: Anastasia Hamandritov
Dev1 ID: 321924433

Dev2 name: Shirel Bitan
Dev2 ID: 209322395
 */

import React from "react";
import NewReport from "./NewReport";
import { CATEGORIES } from "../consts/Categories";
import ReportPopUp from "./ReportPopUp";
class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
      formInputData: {
        from: "",
        to: "",
      },
      chartData: [],
      showPopUp: false,
    };
  }

  updatePopUp = (show) => {
    this.setState({ showPopUp: show });
  };

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

    const isValidInput = (input) => {
      if (input.from === "" || input.to === "") {
        alert("Fill empty fields");
        return false;
      }

      const inputDateFrom = new Date(input.from);
      const inputDateTo = new Date(input.to);

      if (inputDateFrom > inputDateTo) {
        alert("From date is bigger than to date");
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
        const from = this.state.formInputData.from;
        const to = this.state.formInputData.to;
        const data = expenses.filter((expense) => {
          return expense.date >= from && expense.date <= to;
        });
        this.setState({ filtered: data });
        const emptyInput = {
          from: "",
          to: "",
        };
        if (isValidInput(this.state.formInputData)) {
          this.setState({ formInputData: emptyInput });
          this.setState({ chartData: createData(data) });
          this.setState({ showPopUp: true });
        }
      } else {
        alert("Fill empty fields!");
      }
    };

    const createData = (expenses) => {
      const data = [["Category", "Amount"]];
      CATEGORIES.map((category) => data.push([category, 0]));

      for (let i = 0; i < expenses.length; i++) {
        for (let j = 1; j < CATEGORIES.length; j++) {
          if (data[j][0] === expenses[i].category) {
            data[j][1] += parseFloat(expenses[i].price);
            break;
          }
        }
      }

      return data;
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
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
        <div className="popup">
          {this.state.showPopUp ? (
            <ReportPopUp
              show={this.state.showPopUp}
              tableData={this.state.filtered}
              chartData={this.state.chartData}
              updatePopUp={this.updatePopUp}
            />
          ) : (
            <p></p>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Report;
