import React from 'react'
import PropTypes from 'prop-types'
import Devotional from './Devotional'

const DevotionalList = ({ devotionals, onClick, showDevotional, activeDevotional}) => (
  <ul>
    {devotionals.map((devotional) => (
      <Devotional 
        key={devotional._id.$oid} 
        {...devotional} 
        onClick={() => onClick(devotional._id.$oid)} 
        showDevotional={showDevotional} 
        activeDevotional={activeDevotional}
        devotionalId={devotional._id.$oid}/>
    ))}
  </ul>
)

DevotionalList.propTypes = {
  devotionals: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      brief: PropTypes.string.isRequired,
      content: PropTypes.string,
      publish_date: PropTypes.string,
      verses: PropTypes.array
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  showDevotional: PropTypes.bool.isRequired,
  activeDevotional: PropTypes.string.isRequired
}

export default DevotionalList