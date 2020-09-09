import React from 'react';
import BlogContext from './blogContext';
import blogReducer from './blogReducer';
import {ADD_BLOG_POST} from '../types';
const BlogState = ({children}) => {
  const initialState = {
    blogPosts: [],
  };
  const [state, dispatch] = React.useReducer(blogReducer, initialState);

  const addBlogPost = () => {
    dispatch({
      type: ADD_BLOG_POST,
    });
  };

  return (
    <BlogContext.Provider value={{blogPosts: state.blogPosts, addBlogPost}}>
      {children}
    </BlogContext.Provider>
  );
};
export default BlogState;
