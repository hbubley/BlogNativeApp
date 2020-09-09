import {ADD_BLOG_POST} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_BLOG_POST:
      return {
        ...state,
        blogPosts: [
          ...state.blogPosts,
          {title: `Blog Post #${state.blogPosts.length + 1}`},
        ],
      };
    default:
      return state;
  }
};
