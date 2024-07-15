import './blog.css'
import React from "react";
import blogs_data from '../../data/blogs_data';
const Blog_structure = ({ blogTitle, blogDate, blogTopics, blogDesc }) => {
  return (
    <>
      <div className="blogs">
        <h2>{blogTitle}</h2>
        <div className="sub_sect">
          <p className='blog_date'>{blogDate}</p>
          <hr className="vertical" />
          <p>{blogTopics}</p>
        </div>
        <p className='blog_desc'>{blogDesc}</p>
      </div>
      <hr className="horizontal" />
    </>
  );
};

const Blog = () => {
    return (
      <div className="blogsSect">
        <div className="blogs_sect">
          <h1>Blog</h1>
          {blogs_data.map((blogs, i) => (
            <Blog_structure
              blogTitle={blogs.blog_title}
              blogDate={blogs.blog_date}
              blogTopics={blogs.blog_topics}
              blogDesc={blogs.blog_desc}
            />
          ))}
        </div>
      </div>
    );
}

export default Blog;