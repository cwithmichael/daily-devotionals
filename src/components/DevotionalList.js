import React from 'react'
import PropTypes from 'prop-types'
import Devotional from './Devotional'

const DevotionalList = ({ devotionals, onClick }) => (
  <ul>
    {devotionals.map((devotional) => (
      <Devotional key={devotional.ID} {...devotional} onClick={() => onClick(devotional.ID)} />
    ))}
  </ul>
)

DevotionalList.propTypes = {
  devotionals: PropTypes.arrayOf(
    PropTypes.shape({
      ID: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      brief: PropTypes.string.isRequired,
      content: PropTypes.string,
      publish_date: PropTypes.string,
      verses: PropTypes.array
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired
}

export default DevotionalList