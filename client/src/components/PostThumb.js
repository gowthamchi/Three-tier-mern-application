import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { imageShow, videoShow } from "../utils/mediaShow"; // ✅ correctly imported

const PostThumb = ({ posts, result }) => {
  const { theme } = useSelector((state) => state);

  if (result === 0) {
    return <h2 className="text-center color-c1">No Post</h2>;
  }

  return (
    <div className="post_thumb">
      {posts && posts.map((post) => (
        <Link to={`/post/${post._id}`} key={post._id}>
          <div className="post_thumb_display">
            {post.images[0].url.match(/video/i)
              ? videoShow(post.images[0].url, theme)  // ✅ use util with theme
              : imageShow(post.images[0].url, theme)  // ✅ use util with theme
            }

            <div className="post_thumb_menu">
              <i className="far fa-thumbs-up">{post.likes.length}</i>
              <i className="far fa-comments">{post.comments.length}</i>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostThumb;

