import React from 'react'

export default function SearchBar() {
  return (
    <form>
      <label htmlFor='search-bar'>
        Search
      </label>
      <input type='text'/>
      <button type='submit'>Search</button>
    </form>
  )
}
