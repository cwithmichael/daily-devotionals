import React from 'react'
import PropTypes from 'prop-types'
import Devotional from './Devotional'

const DevotionalList = ({ devotionals, onClick, showDevotional, activeDevotional}) => (
  <ul>
    {devotionals.map((devotional) => (
      <Devotional 
        key={devotional.id} 
        {...devotional} 
        onClick={() => onClick(devotional.id)} 
        showDevotional={showDevotional} 
        activeDevotional={activeDevotional}
        devotionalId={devotional.id}/>
    ))}
  </ul>
)

DevotionalList.propTypes = {
  devotionals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      brief: PropTypes.string.isRequired,
      content: PropTypes.string,
      publish_date: PropTypes.string,
      verses: PropTypes.array
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  showDevotional: PropTypes.bool.isRequired,
  activeDevotional: PropTypes.number.isRequired
}

export default DevotionalList