import React from 'react'
import { useParams } from 'react-router-dom';
import CitiesList from './CitiesList';

export default function Cities({ Country, }) {

  let { iso3 } = useParams();
  let post = Country && Country.find(post => (post.iso3).toString() === iso3)
  // console.log(post)

  return (
    <div className='container'>
      {!post && (<h2 style={{ color: 'red', height: '80vh', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>loading data...</h2>)}
      {post && (<CitiesList post={post} />)}
    </div >
  )
}
