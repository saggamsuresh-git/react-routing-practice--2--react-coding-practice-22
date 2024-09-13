import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  console.log(blogsList[0])
  return (
    <ul className="list-container">
      {blogsList.map(each => (
        <BlogItem each={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
