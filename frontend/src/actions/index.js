//export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'
// export const GET_POSTS = 'GET_POSTS'
// export const POST_POSTS = 'POST_POSTS'
export const GET_POSTS_ID = 'GET_POSTS_ID'
// export const POST_POSTS_ID = 'POST_POSTS_ID'
// export const PUT_POSTS_ID = 'PUT_POSTS_ID'
// export const DELETE_POSTS_ID = 'DELETE_POSTS_ID'
// export const POST_COMMENTS = 'POST_COMMENTS'
// export const GET_COMMENTS_ID = 'GET_COMMENTS_ID'
// export const POST_COMMENTS_ID = 'POST_COMMENTS_ID'
// export const PUT_COMMENTS_ID = 'PUT_COMMENTS_ID'
// export const DELETE_COMMENTS_ID = 'DELETE_COMMENTS_ID'


export function showCategory ({ category }) {
    return {
      type: GET_CATEGORY_POSTS,
      category,
    }
  }

export function showPost ({ post }) {
    return {
      type: GET_POSTS_ID,
      post,
    }
  }






/* 
export function getCategories( { categories } ) {
  return {
    type: GET_CATEGORIES,
    categories,
  }
}


//Add new Post
export function postPosts ({ id, timestamp, title, body, author, category }) {
    return {
    type: POST_POSTS,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    }
}

export function deletePosts ({ id }) {
    return {
    type: DELETE_POSTS_ID,
    id,
    }
}

//Vote on post
export function postPostsId ({ id, option }) {
    return {
        type: POST_POSTS_ID,
        id,
        option,
    }
}

//Post comment
export function postComments ({ id, timestamp, body, author, parentId }) {
    return {
        type: POST_COMMENTS,
        id,
        timestamp,
        body,
        author,
        parentId,
    }
}

//Vote on a comment
export function postCommentsId ({ option }) {
    return {
      type: POST_COMMENTS_ID,
      option,
    }
}

//Edit details of exisiting comment
export function putCommentsId ({ timestamp, body }) {
    return {
      type: PUT_COMMENTS_ID,
      timestamp,
      body,
    }
} */