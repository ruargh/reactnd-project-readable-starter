import React from 'react'

export default function CategoryList ({ categories, onSelect }) {
  if (categories.length === 0) {
    return <p>Unknown error occured. Please refresh your browser.</p>
  }

  return (
    <ul className='categories-list'>
      {categories.categories.map((item) => (
        <li onClick={() => onSelect(item)} key={item.name}>
          <h3>{item.name}</h3>
        </li>
      ))}
    </ul>
  )
}
