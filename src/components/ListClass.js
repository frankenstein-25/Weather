import React from 'react'
import ListItem from './ListItem';

export default function ListClass(props) {
  let cnt = props.Country;
  return (
    <div>
      <ul>
        <h3>Country Name</h3>
        {cnt && cnt.map((item, i) => (<ListItem key={i} item={item} />)
        )}
      </ul>
    </div>
  )
}
