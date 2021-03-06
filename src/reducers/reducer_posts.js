import { FETCH_POSTS, FETCH_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state };
      // newstState[post.id] = post;
      // return newState;
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      // console.log(action.payload.data); // [post1, post2]
      //{ 4:post1 10:post2 }
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
