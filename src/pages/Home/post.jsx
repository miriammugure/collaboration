import React from 'react';
import './post.css';

function Posts() {
  return (
    <div className="posts-section">
      <div className="posts-header">
        <h2>Recent posts</h2>
        <a href="#" className="view-all">View all</a>
      </div>
      <div className="posts-container">
        <div className="post-card">
          <h3>Making a design system from scratch</h3>
          <div className="post-meta">
            <span>12 Feb 2020</span> | <span>Design, Pattern</span>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="post-card">
          <h3>Creating pixel perfect icons in Figma</h3>
          <div className="post-meta">
            <span>12 Feb 2020</span> | <span>Figma, Icon Design</span>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Posts;
