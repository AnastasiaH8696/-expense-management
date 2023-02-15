/*
----- Developers info -----
Dev1 name: Anastasia Hamandritov
Dev1 ID: 321924433

Dev2 name: Shirel Bitan
Dev2 ID: 209322395
 */

import React from "react";

class NewReport extends React.Component {
  render() {
    const { handleChange, formInputData, handleSubmit } = this.props;

    return (
      <div className="form-row row">
        <div className="col-auto">
          <input
            type="date"
            onChange={handleChange}
            value={formInputData.from}
            name="from"
            className="form-control"
            placeholder="From"
          />
        </div>
        <div className="col-auto">
          <input
            type="date"
            onChange={handleChange}
            value={formInputData.to}
            name="to"
            className="form-control"
            placeholder="To"
          />
        </div>
        <div className="col-auto">
          <input
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
            value="Create Report"
          />
        </div>
      </div>
    );
  }
}

export default NewReport;
