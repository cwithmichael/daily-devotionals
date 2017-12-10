import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './Devotional.css'

const Devotional = ({ onClick, showDevotional, activeDevotional, devotionalId, name, brief, content, publish_date, verses }) => (
  <div className="row">
  <div className="col-sm-4"></div>
  <div className="col-sm-4 devotional">
    <li
      onClick={onClick}
    >
      <h2 id="title">{name}</h2>
      <p id="brief">{brief}</p>
      <p id="pub">{moment(publish_date).format('MMM Do YY')}</p>
      {showDevotional && devotionalId === activeDevotional &&
      <div>
        <p className="content"> {content} </p>
      <p style={{textDecorationLine: "underline"}}>Verses</p>
        {verses && verses.map((v, index) => <p className="verses" key={index}>{v + " "}</p>)}
      </div>
      }
    </li>
  </div>
  <div className="col-sm-4"></div>
  </div>
)

Devotional.propTypes = {
  onClick: PropTypes.func.isRequired,
  showDevotional: PropTypes.bool.isRequired,
  activeDevotional: PropTypes.string.isRequired,
  devotionalId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  content: PropTypes.string,
  publishDate: PropTypes.string,
  verses: PropTypes.array
  
}

export default Devotional;
