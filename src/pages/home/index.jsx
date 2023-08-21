import React from 'react'
import Header from '../../components/Home/Header'
import Search from '../../components/Home/SearchBar'
import BlogList from '../../components/Home/BlogList'
import { blogList } from '../../config/data'
import { useState } from 'react'
import EmptyList from '../../components/Common/emptyList'

const Home = () => {
  const [blogs , setBlogs] = useState(blogList);
  const [searchKey , setSearchKey] = useState('');

  const handleSearchSubmit = (event) =>{
    event.preventDefault();
    handelSearchResult();
  }

  const handelSearchResult = () =>{
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog)=>
      blog.category.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase().trim())
    );
  


  setBlogs(filteredBlogs);
  };

  const handelClearSearch = () =>{
    setBlogs(blogList);
    setSearchKey('');

  }

  
  
  return (
    <div>
      {/* page header */}
       <Header/>

      {/* search bar */}
      <Search  value={searchKey}
        formSubmit={handleSearchSubmit} 
        handelSearchKey={(e)=>setSearchKey(e.target.value)}
        clearSeach={handelClearSearch} 
         />

      {/* blog list & empty list */}
     { !blogs.length ? <EmptyList/> :<BlogList blogs={blogs} /> } 
    </div>
  )
}

export default Home