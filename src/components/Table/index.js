import React from 'react';
import './index.scss';
import ActionMenu from '../ActionMenu';
import { CaretDownOutline } from 'react-ionicons';
import { CaretUpOutline } from 'react-ionicons';
import { SwapVerticalOutline } from 'react-ionicons';
import _ from 'lodash';

const Table = ({
  config,
  data,
  completeData,
  onClickHeader,
  query,
  setQuery,
}) => {
  const onChangeTable = _.debounce(function (attribut, value) {
    const newQuery = { ...query };
    newQuery[attribut] = value;
    setQuery(newQuery);
  }, 500);

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
                        <span
                          className="title"
                          onClick={() =>
                            onClickHeader(header.stateName, header.state)
                          }
                        >
                          {header.title}
                          {header.state === 1 ? (
                            <CaretUpOutline
                              color="black"
                              width="0.75rem"
                              className="icon"
                            />
                          ) : header.state === -1 ? (
                            <CaretDownOutline
                              color="black"
                              width="0.75rem"
                              className="icon"
                            />
                          ) : (
                            <SwapVerticalOutline
                              color="black"
                              width="0.75rem"
                              className="icon"
                            />
                          )}
                        </span>
                        {header.isSearchable && (
                          <input
                            onChange={(e) =>
                              onChangeTable(header.stateName, e.target.value)
                            }
                          />
                        )}
                      </div>
                    )}
                    {!header.isSortable && (
                      <div>
                        {header.title}{' '}
                        {header.isSearchable && (
                          <input
                            onChange={(e) =>
                              onChangeTable(header.stateName, e.target.value)
                            }
                          />
                        )}
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
