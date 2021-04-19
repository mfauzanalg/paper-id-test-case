import React, { useState } from 'react';
import './index.scss';

import Accounts from './accounts';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

const Finance = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="finance-page">
      <div className="tab-container">
        <Paper square>
          <Tabs
            className="tab"
            value={value}
            indicatorColor="primary"
            onChange={handleChange}
          >
            <Tab className="tab-name" label="Account" />
            <Tab className="tab-name" label="Transaction" />
          </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
          <Accounts />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </div>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

export default Finance;
