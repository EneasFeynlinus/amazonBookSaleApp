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
  const someValue = 'shakeAndBake'
  const displayValue = () => {
    console.log(someValue)
  }
  return (
    <section className="booklist">
      {/* <EventExamples /> */}
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} />
      })}
      <someComponent someValue={someValue} />
    </section>
  )
}

const Book = (props) => {
  const { author, title, image, displayValue } = props

  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>Click me</button>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
