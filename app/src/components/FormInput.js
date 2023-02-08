import React from "react";

function FormInput({ handleChange, formInputData, handleSubmit }) {
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
        <input
          type="text"
          onChange={handleChange}
          value={formInputData.category}
          name="category"
          className="form-control"
          placeholder="Category"
        />
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

export default FormInput;
