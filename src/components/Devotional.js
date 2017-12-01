import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const Devotional = ({ onClick, title, brief, content, publish_date, verses }) => (
  <div>
    <li
      onClick={onClick}
    >
      Title: {title}
      <br/>
      Description: {brief}
      <br />
      Publish Date: {moment(publish_date.toString()).format('MMM Do YY')}
    </li>
    <br />
  </div>
)

Devotional.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  content: PropTypes.string,
  publishDate: PropTypes.string,
  verses: PropTypes.array
  
}

export default Devotional;
