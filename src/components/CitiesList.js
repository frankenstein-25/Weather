import React from 'react'
import CitiesListItem from './CitiesListItem'
import { useEffect } from 'react'
import { useState } from 'react';
import Main from './Main';


export default function CitiesList({ post }) {

  let cnt = post && post.cities;
  let [city, setCity] = useState("");
  let [CountryName, setCountryName] = useState("");

  useEffect(() => {
    let filterRequests = post && (cnt.filter(posts => (((posts).toLowerCase().includes(CountryName.toLowerCase())))));
    setCity(filterRequests);
    // console.log("iso3 :", post)
  }, [cnt, CountryName])
  return (
    <div className='container'>
      <Main CountryName={CountryName} setCountryName={setCountryName} />
      {post && (<p className='d-flex align-items-center country'> Country : <span className='span'>{post && post.country}</span></p>)}
      <h4>Cities</h4>
      <ul>
        {city && city.map((item, i) => (<CitiesListItem key={i} item={item} post={post} />))}
      </ul>
    </div>
  )
}
