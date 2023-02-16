import React from "react";
import "./Table.scss";
const Table = ({ data }) => {
  return (
    <table className="table">
      <tbody className="tbody">
        <tr className="head">
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
        {data.map((data) => {
          return (
            <tr className="data">
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
