// import {Component} from 'react'
import './index.css'

const BlogItem = props => {
  const {each} = props
  const {title, description, publishedDate} = each || {}
  return (
    <li>
      <div className="title-date-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>

      <hr />
    </li>
  )
}
export default BlogItem
