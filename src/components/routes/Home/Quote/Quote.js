import React from 'react'

import './Quote.css'

const Quote = ({ quote }) => (
  <div id='Quote'>
    <p className="text">"{quote.text}"</p>
    <p className="source">{quote.source}</p>
  </div>
)

export default Quote
