import React from 'react'

import TextPage from '../../common/TextPage/TextPage'
import PageTitle from '../../common/PageTitle/PageTitle'
import Quote from './Quote/Quote'

// import iKsg from '../../../assets/images/home/ksg.jpg'

import './Home.css'


const quotes = [
  {
    text: "[Kevin] plays with a sense of style and maturity that is rare to find in musicians twice his age. ... He's a real find.",
    source: "The New Orleans Music Revue; May, 2001"
  },
  {
    text: "...a talented jazz duo.",
    source: "Diablo Magazine; July, 2007 - \"Best of the East Bay\" issue, in reference to the Smith/Stern Jazz Duo"
  },
  {
    text: "He's a very good guitar person, but he should call more often.",
    source: "Kevin's mother."
  }
]


const Home = () => (
  <div id='Home'>
    <PageTitle page='home' />

    <TextPage page='home' />
    <TextPage page='home' />
    <TextPage page='home' />

    {/* <img className="main-image" src={iKsg} alt="howdy!!!!!!!!!!!!!"/> */}

    <hr />

    {
      quotes.map((quote, idx) => (
        <Quote key={idx} quote={quote} />
      ))
    }

  </div>
)

export default Home
