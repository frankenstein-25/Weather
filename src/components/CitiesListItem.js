import React from 'react'
import { Link } from 'react-router-dom';


export default function CitiesListItem({ item, post }) {
  let iso3Value = post.iso3;
  // console.log(iso3Value)
  return (
    <div>
      <li className='link-class'><Link className='link-class' to={`/${iso3Value}/${item}`}>{JSON.stringify(item)}</Link></li>
    </div >
  )
}
