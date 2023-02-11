import React from "react";
import { CATEGORIES } from "../consts/Categories";
class NewExpense extends React.Component {
  render() {
    const { handleChange, formInputData, handleSubmit } = this.props;

    return (
      <div className="form-row row">
        <div className="col">
          <input
            type="text"
            onChange={handleChange}
            value={formInputData.title}
            name="title"
            className="form-control"
            placeholder="Title"
          />
        </div>
        <div className="col">
          <select
            onChange={handleChange}
            value={formInputData.category}
            name="category"
            className="form-control"
          >
            <option value="" disabled>
              Category
            </option>
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <input
            type="text"
            onChange={handleChange}
            value={formInputData.price}
            name="price"
            className="form-control"
            placeholder="Price"
          />
        </div>
        <div className="col">
          <input
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          />
        </div>
      </div>
    );
  }
}

export default NewExpense;
