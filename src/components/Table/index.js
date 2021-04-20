import React from 'react';
import './index.scss';
import ActionMenu from '../ActionMenu';

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
        <tr className="content-table">
          <td>
            <div className="content">Jill</div>
          </td>
          <td>
            <div className="content">Good</div>
          </td>
          <td>
            <div className="content">Smith</div>
          </td>
          <td>
            <div>
              <ActionMenu />
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
