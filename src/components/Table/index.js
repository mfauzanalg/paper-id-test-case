import React from 'react';
import './index.scss';
import ActionMenu from '../ActionMenu';
import { CaretDownOutline } from 'react-ionicons';

const Table = ({ config, data, completeData }) => {
  return (
    <div className="table-component">
      <table>
        <tbody>
          <tr>
            {config.map((header, index) => {
              return (
                <th key={index}>
                  <div>
                    {header.isSortable && (
                      <div className="clickable">
                        <span className="title">
                          {header.title}
                          <CaretDownOutline
                            color="black"
                            width="0.75rem"
                            className="icon"
                          />{' '}
                        </span>
                        {header.isSearchable && <input />}
                      </div>
                    )}
                    {!header.isSortable && (
                      <div>
                        {header.title} {header.isSearchable && <input />}
                      </div>
                    )}
                  </div>
                </th>
              );
            })}
            <th>
              <div>Action</div>
            </th>
          </tr>
          {data.text.instanceArray.map((instance, index) => {
            return (
              <tr className="content-table" key={index}>
                {instance.map((item, index) => {
                  return (
                    <td key={index}>
                      <div className="content">{item}</div>
                    </td>
                  );
                })}
                <td>
                  <div>
                    <ActionMenu
                      action={data.action}
                      instanceData={completeData[index]}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
