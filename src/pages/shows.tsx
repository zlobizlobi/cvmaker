import React, { useState, useEffect } from 'react'
import { SearchBar } from '../components'
import { useDebounce } from '../hooks'

export const Shows = () => {
  const [searchValue, setSearchValue] = useState<string>('')

  const debouncedSearchValue = useDebounce(searchValue, 500)

  useEffect(() => {
    const fetchSearchInput = () => {
      fetch(`http://api.tvmaze.com/search/shows?q=${debouncedSearchValue}`, {
        method: 'GET',
      })
        .then(async (result: any) => {
          const parsedResults = await result.json()
          console.log(parsedResults)
        })
        .catch(err => {
          console.log(err)
        })
    }

    fetchSearchInput()
  }, [debouncedSearchValue])

  return (
    <div>
      <SearchBar onChange={(e: any) => setSearchValue(e.target.value)} />
    </div>
  )
}
