import React from 'react'

import { pageSubtitle, pageText, pageTitle } from '../common/page'
// import '../common/page.css'

const Home = () => (
  <div>
    {pageTitle('This is the Home Title')}
    {pageSubtitle('This is the subtitle.')}

    {pageText('This is page text.')}
    <h2>Home</h2>

  </div>
)

export default Home
