import { useMemo } from 'react'

export const useSortedData = (data, sort) => {
  const sortedData = useMemo(() => {
    if (sort === 'name') {
      return [...data].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    if (sort === 'population') {
      return [...data].sort((a, b) => b[sort] - (a[sort]))
    }
    
    return data
  }, [sort, data])

  return sortedData
}

export const usePost = (data, sort, query) => {
  const sortedData = useSortedData(data, sort)

  const sortedAndSearchedData = useMemo(() => {
    return sortedData.filter((post) =>
      post.name.toLowerCase().includes(query.toLowerCase())
    )
  }, [query, sortedData])

  return sortedAndSearchedData
}
