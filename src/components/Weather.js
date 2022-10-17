import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Weather({ Country }) {
  let { iso3, city } = useParams();
  let posts = Country && Country.find(post => (post.iso3).toString() === iso3)
  let post = posts && posts.cities;
  let cities = post && post.find(post => (post).toString() === city);
  let [latdata, setlatData] = useState("");
  let [londata, setlonData] = useState("");
  let [weather, setWeather] = useState("");
  let [error, setError] = useState("");
  let API_URL = 'https://api.openweathermap.org/geo/1.0/direct?q=';
  let API_URL1 = 'https://api.openweathermap.org/data/2.5/weather?lat=';

  let fetchItem = async () => {
    try {
      let response = await fetch(`${API_URL}${cities}&limit=1&appid=786f9aadee727bff5098ae9ae657a075`);
      console.log(`${API_URL}${cities}&limit=5&appid=786f9aadee727bff5098ae9ae657a075`)
      if (!response.ok) throw Error("didn't receive data");
      let itemlist = await response.json();
      setlatData(itemlist[0].lat);
      setlonData(itemlist[0].lon);
    }
    catch (err) {
      setError(err);
    }
  }
  let fetchItem2 = async () => {
    try {
      let response2 = await fetch(`${API_URL1}${latdata}&lon=${londata}&appid=786f9aadee727bff5098ae9ae657a075`);
      console.log(`${API_URL}${latdata}&lon=${londata}&appid=786f9aadee727bff5098ae9ae657a075`)
      if (!response2.ok) throw Error("didn't receive data");
      let itemlist1 = await response2.json();
      console.log(itemlist1.main)
      setWeather(itemlist1);
    } catch (err) {
    }
  }
  useEffect(() => {
    (async () => await fetchItem())();
  }, [cities]);
  useEffect(() => {
    (async () => await fetchItem2())();
  }, [latdata, londata]);

  let tempFunc = (temp) => {
    if (typeof temp === 'undefined') {
      return ''
    }
    return (temp - 273).toFixed(2)
  }
  const { main: { temp, temp_max: tempMax, temp_min: tempMin } = {} } = weather;
  return (
    < div className='container' >
      {!weather && (<h2 style={{ color: 'red', height: '80vh', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>loading data...</h2>)}
      {weather && (<div>
        < div className='mt-3 d-flex align-items-center country'>City : <span className='span'>{cities}</span></div>
        <h4 className='weather'>Today's Weather :</h4>
        {weather && <p>Temp : <span className="value">{tempFunc(temp)} C</span> </p>}
        {weather && <p>Max Temp : <span className="value">{tempFunc(tempMax)} C</span></p>}
        {weather && <p>Min Temp : <span className="value">{tempFunc(tempMin)} C</span></p>}
      </div>
      )}

    </div >
  )
}
