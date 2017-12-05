import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './Devotional.css'

const Devotional = ({ onClick, title, brief, content, publish_date, verses }) => (
  <div className="row">
  <div className="col-sm-4"></div>
  <div className="col-sm-4 devotional">
    <li
      onClick={onClick}
    >
      <h2 id="title">{title}</h2>
      <p id="brief">{brief}</p>
      <p id="pub">{moment(publish_date).format('MMM Do YY')}</p>
      <p style={{textDecorationLine: "underline"}}>Verses</p>
      <div className="verses">
      {verses.map((v, index) => 
      <p key={index}>{v + " "}</p>)
      }
      </div>
    </li>
  </div>
  <div className="col-sm-4"></div>
  </div>
)

Devotional.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  content: PropTypes.string,
  publishDate: PropTypes.instanceOf(Date),
  verses: PropTypes.array
  
}

export default Devotional;
