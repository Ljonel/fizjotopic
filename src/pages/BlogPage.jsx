import React from "react";
import "../styles/BlogPage.scss";

const BlogPage = () => {
  return (
    <div className="blog-err">
      <div className="blog-text">
        <h1>Zajrzyj tu później!</h1>
      </div>
      <div className="blog-img">
        <img src={process.env.PUBLIC_URL + "/img/blog-portrait.jpg"} alt="xd" />
      </div>
    </div>
  );
};

export default BlogPage;
