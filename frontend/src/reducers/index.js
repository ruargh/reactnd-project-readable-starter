// import { combineReducers } from 'redux'

import {
    GET_CATEGORIES,
    POST_POSTS,
    POST_POSTS_ID,
    PUT_POSTS_ID,
    POST_COMMENTS,
    POST_COMMENTS_ID,
    PUT_COMMENTS_ID,
    DELETE_POSTS_ID,
} from '../actions'



const url = `http://localhost:3001/categories`;
console.log('fetching from url', url);
fetch(url, { headers: { 'Authorization': 'whatever-you-want' },
             credentials: 'include' } )
  .then( (res) => { return(res.json()) })
  .then((data) => {
    initialCategoryState = data})



function category (state = initialCategoryState, action) {
    switch (action.type) {
        case GET_CATEGORIES :
            return {
                ...state,
            }
        default:
            return state
    }
}


  const initialPostState = {
    "1234567890123456789012": {
        id: '1234567890123456789012',
        timestamp: 1467166872634,
        title: null,
        body: null,
        author: null,
        category: null,
        voteScore: 0,
        deleted: false
    },
  }

function post (state = initialPostState, action) {
    switch (action.type) {
        case POST_POSTS :
            const { id, timestamp, title, body, author, category  } = action

            return {
                ...state,
                [id] : post.id,
                [timestamp] : post.timestamp,
                [title] : post.title,
                [body] : post.body,
                [author] : post.author,
                [category] : post.category,
            }
        case PUT_POSTS_ID :
            const { id, title, body  } = action

            return {
                ...state,
                [id]: {
                    ...state[id],
                    title : [title],
                    body : [body],
                }
            }

        case DELETE_POSTS_ID :
            const { id } = action

            return {
                ...state,
                [id]: {
                    ...state[id],
                    deleted : true,
                }
            }
        default :
            return state
    }
}


/*
export default combineReducers({
  food,
  calendar,
})
*/
