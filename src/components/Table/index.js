import React from 'react';
import './index.scss';

const Table = ({ field }) => {
  return (
    <div className="table-component">
      <table>
        <tr>
          <th>
            <div>
              Account Name <input />
            </div>
          </th>
          <th>
            <div>Description</div>
          </th>
          <th>
            <div>Account Type</div>
          </th>
          <th>
            <div>Action</div>
          </th>
        </tr>
        <tr className="content">
          <td>
            <div>Jill</div>
          </td>
          <td>
            <div>Good</div>
          </td>
          <td>
            <div>Smith</div>
          </td>
          <td>
            <div>50</div>
          </td>
        </tr>
        <tr className="content">
          <td>
            <div>Eve</div>
          </td>
          <td>
            <div>Excellent</div>
          </td>
          <td>
            <div>Jackson</div>
          </td>
          <td>
            <div>94</div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
