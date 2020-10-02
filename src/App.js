import React from 'react';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import './styles/App.scss';

function App() {
  return (
    <div className="app">
      <h1>COVID-19 tracker</h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="worldwide" />
          <MenuItem value="worldwide" />
          <MenuItem value="worldwide" />
        </Select>
      </FormControl>
      {/* HEADER */}
      {/* title + select dropdown field */}

      {/* info box */}
      {/* info box */}
      {/* info box */}

      {/* map */}

      {/* table */}
      {/* graph */}
    </div>
  );
}

export default App;
