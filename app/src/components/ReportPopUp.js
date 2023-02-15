/*
----- Developers info -----
Dev1 name: Anastasia Hamandritov
Dev1 ID: 321924433

Dev2 name: Shirel Bitan
Dev2 ID: 209322395
 */

import React from "react";
import { Modal, Button } from "react-bootstrap";
import ExpensesTable from "./ExpenseTable";
import { Chart } from "react-google-charts";

class ReportPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invokeModal: false,
    };
  }

  render() {
    const { show, tableData, chartData, updatePopUp } = this.props;

    const initModal = () => {
      updatePopUp(false);
    };

    const options = {
      title: "Expenses by categories",
    };

    return (
      <>
        <Modal show={show}>
          <Modal.Header closeButton onClick={initModal}>
            <Modal.Title>Expenses Report</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ExpensesTable tableData={tableData} />
            <Chart
              chartType="PieChart"
              data={chartData}
              options={options}
              width={"100%"}
              height={"400px"}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={initModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ReportPopUp;
