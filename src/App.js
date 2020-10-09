import React, { useEffect, useState } from 'react';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import './styles/App.scss';

function App() {
  // STATE = HOW TO USE VARIABLE IN REACT <<<
  const [countries, setCountries] = useState([]);

  // USE EFFECT runs piece of code based on a given condition
  useEffect(() => {
    // the code inside here will run once
    // when the component loads and not again
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries').then((response) =>
        response.json(),
      );
    };
  }, [countries]);
  //   API Requests

  return (
    <div className="app">
      <h1>COVID-19 tracker</h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value="abc">
          {/* Loop through countries and show the dropdown list
          of these countries */}

          {/* <MenuItem value="worldwide"> Option 1</MenuItem>
          <MenuItem value="worldwide"> Option 2</MenuItem>
          <MenuItem value="worldwide"> Option 3</MenuItem>
          <MenuItem value="worldwide"> Option 4</MenuItem> */}
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
