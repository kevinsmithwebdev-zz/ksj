import React from 'react'

import './Header.css'

const navArr = ['home', 'playing', 'teaching', 'blog', 'extras', 'bio', 'contact']

const renderLink = (link, idx) => {
  let linkUrl = (link==='home') ? '/' : link
  let curPath = window.location.pathname
  let navLinkClass = 'navLink'

  if ((('/'+linkUrl)===curPath)||(curPath==='/'&&link==='home'))
    navLinkClass = 'navLinkCur'

  return (
    <li key={idx}>
      <a className={navLinkClass} href={linkUrl}>{link.toUpperCase()}</a>
    </li>
  )
}

const Header = () => {
  return (
    <header className="header">
  		<div id="brand-wrapper">
        <div className="brand-hl">kevin</div><div className="brand-hl">smith</div><div className="brand-hl">guitar</div><div className="brand-com">com</div>
      </div>
      <ul className="main-nav">
        {navArr.map((link, idx) => renderLink(link, idx))}
      </ul>
  	</header>
  )
}
export default Header
