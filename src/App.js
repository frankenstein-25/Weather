import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import { useState, useEffect } from 'react';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import Cities from './components/Cities';
import About from './components/About';
import Missimg from './components/Missimg';
import Weather from './components/Weather';


let list;
function App() {
  let [CountryName, setCountryName] = useState("");
  let [Country, setCountry] = useState("");
  let [error, setFetchError] = useState("");
  let API_URL = 'https://countriesnow.space/api/v0.1/countries';
  let fetchItem = async () => {
    try {
      let response = await fetch(`${API_URL}`);
      if (!response.ok) throw Error("didn't receive data");
      let itemlist = await response.json();
      list = itemlist.data;
      setCountry(list);
      setFetchError(null);
      return list;
    }
    catch (err) {
      setFetchError(err.message);
    }
  }
  useEffect(() => {
    (async () => await fetchItem())();
  }, []);

  useEffect(() => {
    let filterRequests = Country && (Country.filter(post => (((post.country.toLowerCase()).includes(CountryName)) || ((post.iso2).includes(CountryName)) || ((post.iso3).includes(CountryName)))));
    setCountry(filterRequests);
    if (CountryName === '') {
      setCountry(list);
    }
  }, [CountryName])
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={
          <>
            <Main CountryName={CountryName} setCountryName={setCountryName} />
            <CountryDetails Country={Country} />
          </>} >
        </Route>
        <Route exact path='/:iso3' element={<Cities Country={Country} />}></Route>
        <Route exact path='/:iso3/:city' element={<Weather Country={Country} />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/*' element={<Missimg />}></Route>
      </Routes >
      <Footer />
    </>
  );
}

export default App;
