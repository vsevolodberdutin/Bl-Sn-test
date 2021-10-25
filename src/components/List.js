import React from 'react'

const List = (data) => {
  return (
    <ul>
      {data.props.map(item => <li key={item.name}>"Planet name: "{item.name}', Climate: '{item.climate}', Population: '{item.population}</li> )}
    </ul>
  )
}

export default List
