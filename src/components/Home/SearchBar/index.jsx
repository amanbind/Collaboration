import React from 'react'
import "./style.css"

const Search = ({value, handelSearchKey,clearSeach,formSubmit}) => {
  return (
  <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
        <input 
        type='text'
        placeholder="Search for resource"
        onChange={handelSearchKey}
        value = {value}
        />

        {value && <span onClick = {clearSeach} className='cross'>x</span>}

        <button>Go</button>

    </form>
  </div>
  )
}

export default Search