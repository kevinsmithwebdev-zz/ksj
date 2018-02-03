import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home/Home'
import Playing from './Playing/Playing'
import Teaching from './Teaching/Teaching'
import Blog from './Blog/Blog'
import Extras from './Extras/Extras'
import Bio from './Bio/Bio'
import Contact from './Contact/Contact'
import NotFound from './NotFound/NotFound'

import Header from './Header/Header'
import Footer from './Footer/Footer'

import './App.css'

const App = () => (

  <div className="main-wrapper">

    <Header />

    <div className='page'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/playing' component={Playing} />
        <Route exact path='/teaching' component={Teaching} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/extras' component={Extras} />
        <Route exact path='/bio' component={Bio} />
        <Route exact path='/contact' component={Contact} />

        <Route exact path='*' component={NotFound} />
      </Switch>

    </div>

    <Footer />

  </div>
)


export default App
