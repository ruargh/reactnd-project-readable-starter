import { combineReducers } from 'redux'

import {
    // GET_CATEGORIES,
    GET_CATEGORY_POSTS,
    // GET_POSTS,
    GET_POSTS_ID,
    // POST_POSTS,
    // POST_POSTS_ID,
    // PUT_POSTS_ID,
    // POST_COMMENTS,
    // POST_COMMENTS_ID,
    // PUT_COMMENTS_ID,
    // DELETE_POSTS_ID,
} from '../actions'


const initialCategoryState = { 
    categories:
            [{
                "name":"null",
                "path":"null"
            },{
                "name":"null",
                "path":"null"
            },{
                "name":"null",
                "path":"null"
            }]
        }

function categories (state = initialCategoryState, action) {
    const { categories } = action
  
    switch (action.type) {
      case GET_CATEGORY_POSTS :
        return {
          ...state
        }
      default :
        return state
    }
  }

  const initialPostState =
  
      [{
          "id":"8xf0y6ziyjabvozdd253nd",
          "timestamp":1467166872634,
          "title":"null",
          "body":"null",
          "author":"null",
          "category":"null",
          "voteScore":0,
          "deleted":false
      },{
          "id":"6ni6ok3ym7mf1p33lnez",
          "title":"null",
          "body":"null",
          "author":"null",
          "category":"null",
          "voteScore":0,
          "deleted":false
      }]

function posts (state = initialPostState, action) {
    const { posts } = action
  
    switch (action.type) {
      case GET_POSTS_ID :
        return {
          ...state
        }
      default :
        return state
    }
  }



/* 

const initialCategoryState = { 
    categories:
            [{
                "name":"null",
                "path":"null"
            },{
                "name":"null",
                "path":"null"
            },{
                "name":"null",
                "path":"null"
            }]
        }


function categories (state = initialCategoryState, action) {
    const { categories } = action

    switch (action.type) {
        case GET_CATEGORIES :
            console.log('Get Cat new State:' + categories )
            return {
                categories
            }
        default:
            return state
    }
}


  const initialPostState =
    
        [{
            "id":"8xf0y6ziyjabvozdd253nd",
            "timestamp":1467166872634,
            "title":"Udacity is the best place to learn React",
            "body":"Everyone says so after all.",
            "author":"thingtwo",
            "category":"react",
            "voteScore":6,
            "deleted":false
        },{
            "id":"6ni6ok3ym7mf1p33lnez",
            "timestamp":1468479767190,
            "title":"Learn Redux in 10 minutes!",
            "body":"Just kidding. It takes more than 10 minutes to learn technology.",
            "author":"thingone",
            "category":"redux",
            "voteScore":-5,
            "deleted":false
        }]

function post (state = initialPostState, action) {
    const { id, timestamp, title, body, author, category, voteScore, deleted  } = action

    switch (action.type) {

        case POST_POSTS :

            return {
                ...state,
                [id] : post.id,
                [timestamp] : post.timestamp,
                [title] : post.title,
                [body] : post.body,
                [author] : post.author,
                [category] : post.category,
            }

        case POST_POSTS_ID :

            return {
                ...state,
                [voteScore] : 99,
            }

        case PUT_POSTS_ID :

            return {
                ...state,
                [id]: {
                    ...state[id],
                    title : [title],
                    body : [body],
                }
            }

        case DELETE_POSTS_ID :

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
 */


export default combineReducers({
    categories,
    // post,
})
