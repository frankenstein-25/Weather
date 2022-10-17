import React from 'react'
import ListClass from './ListClass'



export default function CountryDetails(props) {
  return (
    <div className='container'>
      {!props.Country && (<h2 style={{ color: 'red', height: '80vh', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>loading data...</h2>)}
      {props.Country && (<ListClass Country={props.Country} />)}
    </div>
  )
}
