import React from 'react';
import './index.scss';
import ActionMenu from '../ActionMenu';

const Table = ({ config, data }) => {
  console.log(config);

  return (
    <div className="table-component">
      <table>
        <tbody>
          <tr>
            {config.map((header, index) => {
              return (
                <th key={index}>
                  <div>
                    {header.title} {header.isSearchable && <input />}
                  </div>
                </th>
              );
            })}
            <th>
              <div>Action</div>
            </th>
          </tr>
          <tr className="content-table">
            {data.map((item, index) => {
              return (
                <td key={index}>
                  <div className="content">{item}</div>
                </td>
              );
            })}
            <td>
              <div>
                <ActionMenu />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
