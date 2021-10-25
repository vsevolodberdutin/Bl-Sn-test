import React from 'react'
import MySelect from './UI/select/MySelect'
import MyInput from './UI/input/MyInput'

const Filter = ({filter, setFilter}) => {
    return (
        <div>
        <MyInput
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
            placeholder='Search planet by name...'
        />

        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="Sort by..."
          options={[
            { value: 'name', name: 'By name' },
            { value: 'population', name: 'By population' },
          ]}
        />
      </div>
    )
}

export default Filter
