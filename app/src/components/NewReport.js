import React from "react";

class NewReport extends React.Component {
  render() {
    const { handleChange, formInputData, handleSubmit } = this.props;

    return (
      <div className="form-row row">
        <div className="col">
          <input
            type="date"
            onChange={handleChange}
            value={formInputData.from}
            name="from"
            className="form-control"
            placeholder="From"
          />
        </div>
        <div className="col">
          <input
            type="date"
            onChange={handleChange}
            value={formInputData.to}
            name="to"
            className="form-control"
            placeholder="To"
          />
        </div>
        <div className="col">
          <input
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
            placeholder="Generate"
          />
        </div>
      </div>
    );
  }
}

export default NewReport;
