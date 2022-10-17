import React from 'react'

export default function Main({ CountryName, setCountryName }) {

  let handlesubmit = (e) => {
    console.log(CountryName)
    setCountryName('');

  }
  let onchangehandler = (e) => {
    setCountryName(e.target.value);
  }
  return (
    <div className='container Search-bar'>
      <form className="d-flex justify-content-end" onSubmit={(e) => e.preventDefault()}>
        <input className="form-control me-2" type="search" placeholder="Search Country" value={CountryName} onChange={(e) => {
          onchangehandler(e)
        }} />
        <button className="btn btn-outline-success" onClick={handlesubmit} type="submit">Search</button>
      </form>
    </div >
  )
}
