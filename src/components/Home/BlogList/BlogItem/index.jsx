import React from 'react'
import "./style.css"
import Chip from '../../../Common/chip'
import { Link } from 'react-router-dom'

const BlogItem = ({blog : {id,description,title,createdAt,authorName,authorAvatar,category,cover}}) => {
  return (
    <div className='blogItem-wrap'>
        
        <img src={cover} alt='reload' className='blogItem-cover'/>
        <Chip label={category} />
        <h3>{title}</h3>
        <p className='blogItem-description'>{description}</p>


        <footer>
         <div className="blogItem-author">
           <img src= {authorAvatar} alt='author phomtu'/>
            <div>
               <h6>{authorName}</h6>
              <p>{createdAt}</p>
            </div>

         </div>

         <Link className='blogItem-link' to = {`/blog/${id}`}>→</Link>

        </footer>

        


    </div>
  )
}

export default BlogItem