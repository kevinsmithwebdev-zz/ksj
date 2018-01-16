import React from 'react'
import '../../common/styles.css'

export const pageTitle = (text) => {
  return <h2 className='pageTitle'>{text}</h2>
}

export const pageSubtitle = (text) => {
  return <h3 className='pageSubtitle'>{text}</h3>
}

export const pageText = (text) => {
  console.log('pageText', text)
  // return <p className='pageText'>{text}</p>
  return <p className='pageText'>{text}</p>
}
