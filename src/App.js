import React, { useState, useEffect } from 'react'

import List from './components/List'
import Filter from './components/Filter'
import { usePost } from './hooks/useMySort'

function App() {
  const [planets, setPlanets] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const sortedAndSearchedPosts = usePost(planets, filter.sort, filter.query)

  useEffect(() => {
    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/')
      let data = await res.json()
      setPlanets(data.results)
    }
    fetchPlanets()
  }, [])

  return (
    <div className="App">
      <Filter filter={filter} setFilter={setFilter} />
      <List props={sortedAndSearchedPosts}/>
    </div>
  )
}

export default App
