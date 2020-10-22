import React, { useEffect, useState } from 'react'
import { MenuItem, FormControl, Select } from '@material-ui/core'
import InfoBox from './InfoBox'
import './styles/App.scss'

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('worldwide')

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, // United States, United Kingdom
            value: country.countryInfo.iso2, // UK,USA,FR
          }))

          setCountries(countries)
        })
    }

    getCountriesData()
  }, [])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value

    console.log('YOOOOO >>>>', countryCode)

    setCountry(countryCode)
  }

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 tracker</h1>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            onChange={onCountryChange}
            value={country}
          >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="app__stats">
        <InfoBox
          title="Coronavirus Cases"
          cases={123}
          total={2000}
        ></InfoBox>
        <InfoBox title="Recovered" cases={123} total={300}></InfoBox>
        <InfoBox title="Deaths" cases={12323} total={4000}></InfoBox>
      </div>

      {/* table */}
      {/* graph */}

      {/* map */}
    </div>
  )
}

export default App
