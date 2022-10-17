import React from 'react'
import { Link } from 'react-router-dom';

export default function ListItem(props) {

  return (
    <li className='li-class' >
      <Link className='link-class' to={`/${props.item.iso3}`}>{JSON.stringify(props.item.country)}</Link>
    </li>
  )
}
