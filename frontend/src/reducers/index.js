// import { combineReducers } from 'redux'

import {
    POST_POSTS,
    DELETE_POSTS,
    POST_POSTS_ID,
    PUT_POSTS_ID,
    POST_COMMENTS,
    POST_COMMENTS_ID,
    PUT_COMMENTS_ID,
    DELETE_POSTS_ID,
} from '../actions'

export const POST_POSTS = 'POST_POSTS'
export const DELETE_POSTS = 'DELETE_POSTS'
export const POST_POSTS_ID = 'POST_POSTS_ID'
export const PUT_POSTS_ID = 'PUT_POSTS_ID'
export const DELETE_POSTS_ID = 'DELETE_POSTS_ID'
export const POST_COMMENTS_ID = 'POST_COMMENTS_ID'
export const PUT_COMMENTS_ID = 'PUT_COMMENTS_ID'
export const DELETE_COMMENTS_ID = 'DELETE_COMMENTS_ID'


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

        case DELETE_POSTS :
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
