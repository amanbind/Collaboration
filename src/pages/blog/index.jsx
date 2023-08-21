import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { blogList } from '../../config/data';
import Chip from '../../components/Common/chip';
import EmptyList from '../../components/Common/emptyList';
import "./style.css"

const Blog = () => {
  const {id} = useParams();
  const [blog , setBlog] = useState(null)

  useEffect(()=>{

    let blog= blogList.find(blog=>blog.id=== parseInt(id))
if(blog){
  setBlog(blog);
}


  },[])

  return (
    <div>

      <Link to = "/" className='blog-goBack'><span>&#8592;</span>Go Back</Link>

      {
        blog?(<div className='blog-wrapper'>

          <header>
            <p className='blog-date'>Published{blog.createdAt}
            </p>

            <h1>{blog.title}</h1>
            <div className="blog-subcategory">
              {blog.subCategory.map((category,index)=><div><Chip key={index} label={category}/></div>
                
            )}
            </div>
          </header>
          <img src={blog.cover} alt='cover'/>
          <p className='blog-desc'>{blog.description}</p>
        </div>):(<EmptyList/>)
      }
    </div>
  )
}

export default Blog