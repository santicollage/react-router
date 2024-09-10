import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogdata } from './blogdata'

function BlogPage() {
  return (
    <>
      <h1>Blog</h1>

      <Outlet/>

      {blogdata.map(post => (
        <BlogLink key={post.title} post={post} />
      ))}
    </>
  );
}

function BlogLink({post}) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  )
}

export { BlogPage };