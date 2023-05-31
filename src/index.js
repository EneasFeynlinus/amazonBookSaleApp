import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
    author: 'Piggyback',
    title:
      "The Legend of Zelda™: Tears of the Kingdom – The Complete Official Guide: Collector's Edition",
    image: './images/theLegendOfZelda.jpg',
    id: 1,
  },

  {
    author: 'Dr. Seuss',
    title: "Oh, the Places You'll Go!",
    image: './images/secondBook.jpg',
    id: 2,
  },

  {
    author: ' James Clear',
    title: 'Atomic Habits',
    image: './images/atomicHabits.jpg',
    id: 3,
  },

  {
    author: 'Peter Attia',
    title: 'Outlive',
    image: './images/outlive.jpg',
    id: 4,
  },
]

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { image, title, author } = book

        return <Book author={author} title={title} img={image} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { author, title, img, children } = props
  console.log(props)
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
