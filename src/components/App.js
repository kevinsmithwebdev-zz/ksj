import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Col, Grid, Row } from 'react-bootstrap'

import Header from './Header/Header'

import Home from './Home/Home'
import Bio from './Bio/Bio'
import Media from './Media/Media'

import Calendar from './Calendar/Calendar'

import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Row className="show-grid">
            <Col className="app-main-area" xs={12} md={8}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/bio" component={Bio} />
                <Route path="/media" component={Media} />
              </Switch>
            </Col>
            <Col className="app-calendar-area" xs={6} md={4}>
              <Calendar />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App
