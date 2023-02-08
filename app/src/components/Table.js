import React from "react";

function Table({ tableData }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>S.N</th>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.title}</td>
              <td>{data.category}</td>
              <td>{data.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
