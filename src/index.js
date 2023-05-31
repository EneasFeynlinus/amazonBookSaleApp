import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const firstBook = {
  author: 'Piggyback',
  title:
    "The Legend of Zelda™: Tears of the Kingdom – The Complete Official Guide: Collector's Edition",
  image: './images/theLegendOfZelda.jpg',
}

const secondBook = {
  author: 'Dr. Seuss',
  title: "Oh, the Places You'll Go!",
  image: './images/secondBook.jpg',
}

const thirdBook = {
  author: ' James Clear',
  title: 'Atomic Habits',
  image: './images/atomicHabits.jpg',
}

const fourthBook = {
  author: 'Peter Attia',
  title: 'Outlive',
  image: './images/outlive.jpg',
}

// const title =
//   "The Legend of Zelda™: Tears of the Kingdom – The Complete Official Guide: Collector's Edition"
// const author = 'Piggyback'
// const image = './images/zeldaBook.jpg'

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.image}
      ></Book>

      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.image}
      />
      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.image}
      />
      <Book
        author={fourthBook.author}
        title={fourthBook.title}
        img={fourthBook.image}
      />
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
