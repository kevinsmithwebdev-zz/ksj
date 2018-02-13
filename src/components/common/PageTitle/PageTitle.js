import React from 'react'

import './PageTitle.css'

const Titles = {
  home: {
    title: "Kevin Smith - Jazz Guitar",
    subtitle: "Bay Area jazz guitarist available for performance and teaching."
  }
}

const PageTitle = ({ page }) => (
  <div id='PageTitle'>
    <h1>{Titles[page].title}</h1>
    <h2>{Titles[page].subtitle}</h2>
  </div>
)

export default PageTitle
