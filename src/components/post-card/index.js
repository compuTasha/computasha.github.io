import { Link } from 'gatsby';
import React from 'react';
import './style.scss';

<meta name="google-site-verification" content="Z0asH34ltqt9ki3R1a2Fr49jKVni5zc16nJpVpjNpYw" />

function PostCard({ post }) {
  const { id, slug, title, excerpt, date, categories } = post;
  return (
    <div className="post-card-wrapper">
      <Link className="post-card" key={id} to={slug}>
        <div className="title">{title}</div>
        <p className="description" dangerouslySetInnerHTML={{ __html: excerpt }} />
        <div className="info">
          <div className="date">{date}</div>
          <div className="categories">
            {categories.map((category) => (
              <div className="category" key={category}>
                {category}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
