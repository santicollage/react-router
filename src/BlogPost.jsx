import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogdata } from './blogdata'
import { useAuth } from "./auth";

function BlogPost() {
  const navigate = useNavigate();

  const { slug } = useParams();

  const auth = useAuth();

  const blogpost = blogdata.find(post => post.slug === slug);

  const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username;

  const returnBlog = () => {
    navigate(-1);
  };

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnBlog}>Volver al blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>

      {
        canDelete && (
          <button>Eliminar blogpost</button>
        )
      }
    </>
  );
}

export { BlogPost };