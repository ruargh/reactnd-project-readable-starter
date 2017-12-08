import React from 'react'

export default function PostList ({ posts, onSelect }) {
  if (posts.length === 0) {
    return <p>Unknown error occured. Please refresh your browser.</p>
  }

  return (
    <ul className='posts-list'>
      {posts.map((item) => (
        <li onClick={() => onSelect(item)} key={item.id}>
          <h4>{item.title}</h4>
        </li>
      ))}
    </ul>
  )
}
