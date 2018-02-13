import React from 'react'

import LinksSection from './LinksSection/LinksSection'

import './Extras.css'

const Extras = () => {
  return (
    <div id='Extras'>
      <h1> These are some helpful links for learning jazz guitar...</h1>
      <LinksSection linksFile="links" />
    </div>
  )
}

export default Extras
