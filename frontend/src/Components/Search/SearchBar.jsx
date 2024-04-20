import React from 'react'

export default function SearchBar() {
  return (
    <div className=' container'>
      <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success custom-bg-btn" type="submit">
              Search
            </button>
          </form>
    </div>
  )
}
