const Book = (props) => {
  const { author, title, image, number } = props
  // console.log(props)
  console.log(number)
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  )
}

export default Book
