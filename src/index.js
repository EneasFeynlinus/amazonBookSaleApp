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
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const EventExamples = () => {
  const handleFormInput = (event) => {
    console.log(event.target)
    console.log(event.target.name)
    // console.log(event.target.value)
  }
  const handleButtonClick = () => {
    alert('handle button click')
  }
  const handleFormSubmition = (event) => {
    event.preventDefault()
    console.log('form submitted.')
  }
  return (
    <section>
      <form onSubmit={handleFormSubmition}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button type="button">Submit</button>
      <button onClick={handleButtonClick} type="button">
        Click me
      </button>
    </section>
  )
}

const Book = (props) => {
  const { author, title, image } = props
  console.log(props)
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
