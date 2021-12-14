import React from "react";


const Table = ({ rows, columns }) => {

  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          {columns}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

export default Table;