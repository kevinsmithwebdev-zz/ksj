import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Home from './routes/Home/Home'
import Playing from './routes/Playing/Playing'
import Teaching from './routes/Teaching/Teaching'
import Blog from './routes/Blog/Blog'
import Extras from './routes/Extras/Extras'
import Bio from './routes/Bio/Bio'
import Contact from './routes/Contact/Contact'

import Calendar from './Calendar/Calendar'

import Header from './Header/Header'
import Footer from './Footer/Footer'

import './App.css'

const App = () => (

  <div className="page">
    <div className="page-header">Header</div>
    <div className="page-content">  

          <p>Sriracha small batch tousled Tumblr banh mi sartorial. Cosby sweater XOXO direct trade Austin meggings banjo. Wayfarers deep v tousled Schlitz shabby chic, Portland Truffaut Marfa aesthetic keffiyeh. Salvia retro tattooed sartorial polaroid. Selvage hella 3 wolf moon PBR pug, ugh Schlitz freegan keffiyeh raw denim jean shorts wayfarers roof party. Neutra Shoreditch iPhone, +1 brunch Echo Park XOXO slow-carb street art Vice Williamsburg tattooed forage. Butcher Godard ethical try-hard.</p>

          <p>Vegan blog Truffaut irony deep v Etsy. You probably haven't heard of them Schlitz chambray art party craft beer Echo Park mixtape, deep v fashion axe Wes Anderson twee McSweeney's DIY. Retro twee polaroid 3 wolf moon, Bushwick locavore organic skateboard keffiyeh Kickstarter Williamsburg sustainable Godard sartorial trust fund. Stumptown paleo put a bird on it VHS hella. Put a bird on it mixtape Godard, vegan farm-to-table letterpress chia hella. Meggings DIY freegan normcore gastropub blog. Dreamcatcher wolf kitsch biodiesel lomo jean shorts, pug fap Odd Future craft beer stumptown locavore cornhole put a bird on it salvia.</p>

          <p>Hoodie Truffaut chillwave PBR art party. Slow-carb literally readymade, tousled stumptown ennui trust fund seitan paleo blog typewriter vegan. 90's mixtape American Apparel, kale chips art party iPhone Etsy Neutra organic kogi direct trade typewriter. Aesthetic occupy Portland artisan craft beer fixie, Pinterest irony normcore letterpress. 8-bit craft beer seitan flexitarian, synth banh mi cardigan ethical High Life. Fixie whatever literally semiotics Helvetica 8-bit. Gluten-free tattooed Odd Future umami blog master cleanse, asymmetrical 8-bit yr.</p>

          <p>Tattooed gentrify asymmetrical twee, fashion axe normcore banh mi Etsy. Irony post-ironic kale chips readymade selfies art party, Marfa narwhal occupy before they sold out Thundercats. Banjo locavore 3 wolf moon artisan Marfa. XOXO church-key hella bitters, pour-over Blue Bottle wolf typewriter Carles. American Apparel umami twee locavore, blog hella artisan. Mixtape Shoreditch sriracha, organic before they sold out asymmetrical fashion axe ugh. Kale chips yr Pitchfork jean shorts Vice gentrify.</p>

          <p>Sriracha small batch tousled Tumblr banh mi sartorial. Cosby sweater XOXO direct trade Austin meggings banjo. Wayfarers deep v tousled Schlitz shabby chic, Portland Truffaut Marfa aesthetic keffiyeh. Salvia retro tattooed sartorial polaroid. Selvage hella 3 wolf moon PBR pug, ugh Schlitz freegan keffiyeh raw denim jean shorts wayfarers roof party. Neutra Shoreditch iPhone, +1 brunch Echo Park XOXO slow-carb street art Vice Williamsburg tattooed forage. Butcher Godard ethical try-hard.</p>

          <p>Vegan blog Truffaut irony deep v Etsy. You probably haven't heard of them Schlitz chambray art party craft beer Echo Park mixtape, deep v fashion axe Wes Anderson twee McSweeney's DIY. Retro twee polaroid 3 wolf moon, Bushwick locavore organic skateboard keffiyeh Kickstarter Williamsburg sustainable Godard sartorial trust fund. Stumptown paleo put a bird on it VHS hella. Put a bird on it mixtape Godard, vegan farm-to-table letterpress chia hella. Meggings DIY freegan normcore gastropub blog. Dreamcatcher wolf kitsch biodiesel lomo jean shorts, pug fap Odd Future craft beer stumptown locavore cornhole put a bird on it salvia.</p>

          <p>Hoodie Truffaut chillwave PBR art party. Slow-carb literally readymade, tousled stumptown ennui trust fund seitan paleo blog typewriter vegan. 90's mixtape American Apparel, kale chips art party iPhone Etsy Neutra organic kogi direct trade typewriter. Aesthetic occupy Portland artisan craft beer fixie, Pinterest irony normcore letterpress. 8-bit craft beer seitan flexitarian, synth banh mi cardigan ethical High Life. Fixie whatever literally semiotics Helvetica 8-bit. Gluten-free tattooed Odd Future umami blog master cleanse, asymmetrical 8-bit yr.</p>

          <p>Tattooed gentrify asymmetrical twee, fashion axe normcore banh mi Etsy. Irony post-ironic kale chips readymade selfies art party, Marfa narwhal occupy before they sold out Thundercats. Banjo locavore 3 wolf moon artisan Marfa. XOXO church-key hella bitters, pour-over Blue Bottle wolf typewriter Carles. American Apparel umami twee locavore, blog hella artisan. Mixtape Shoreditch sriracha, organic before they sold out asymmetrical fashion axe ugh. Kale chips yr Pitchfork jean shorts Vice gentrify.</p>

          <p>Sriracha small batch tousled Tumblr banh mi sartorial. Cosby sweater XOXO direct trade Austin meggings banjo. Wayfarers deep v tousled Schlitz shabby chic, Portland Truffaut Marfa aesthetic keffiyeh. Salvia retro tattooed sartorial polaroid. Selvage hella 3 wolf moon PBR pug, ugh Schlitz freegan keffiyeh raw denim jean shorts wayfarers roof party. Neutra Shoreditch iPhone, +1 brunch Echo Park XOXO slow-carb street art Vice Williamsburg tattooed forage. Butcher Godard ethical try-hard.</p>

          <p>Vegan blog Truffaut irony deep v Etsy. You probably haven't heard of them Schlitz chambray art party craft beer Echo Park mixtape, deep v fashion axe Wes Anderson twee McSweeney's DIY. Retro twee polaroid 3 wolf moon, Bushwick locavore organic skateboard keffiyeh Kickstarter Williamsburg sustainable Godard sartorial trust fund. Stumptown paleo put a bird on it VHS hella. Put a bird on it mixtape Godard, vegan farm-to-table letterpress chia hella. Meggings DIY freegan normcore gastropub blog. Dreamcatcher wolf kitsch biodiesel lomo jean shorts, pug fap Odd Future craft beer stumptown locavore cornhole put a bird on it salvia.</p>

          <p>Hoodie Truffaut chillwave PBR art party. Slow-carb literally readymade, tousled stumptown ennui trust fund seitan paleo blog typewriter vegan. 90's mixtape American Apparel, kale chips art party iPhone Etsy Neutra organic kogi direct trade typewriter. Aesthetic occupy Portland artisan craft beer fixie, Pinterest irony normcore letterpress. 8-bit craft beer seitan flexitarian, synth banh mi cardigan ethical High Life. Fixie whatever literally semiotics Helvetica 8-bit. Gluten-free tattooed Odd Future umami blog master cleanse, asymmetrical 8-bit yr.</p>

          <p>Tattooed gentrify asymmetrical twee, fashion axe normcore banh mi Etsy. Irony post-ironic kale chips readymade selfies art party, Marfa narwhal occupy before they sold out Thundercats. Banjo locavore 3 wolf moon artisan Marfa. XOXO church-key hella bitters, pour-over Blue Bottle wolf typewriter Carles. American Apparel umami twee locavore, blog hella artisan. Mixtape Shoreditch sriracha, organic before they sold out asymmetrical fashion axe ugh. Kale chips yr Pitchfork jean shorts Vice gentrify.</p>

    </div>
    <div className="page-footer">Footer</div>
  </div>
)


export default App




//
// <div className="all-wrapper">
//
//   <div className="header-wrapper">
//     <Header />
//   </div>
//
//   <div className="page-wrapper">
//     <article>
//       <Switch>
//         <Route exact path='/' component={Home} />
//         <Route exact path='/playing' component={Playing} />
//         <Route exact path='/teaching' component={Teaching} />
//         <Route exact path='/blog' component={Blog} />
//         <Route exact path='/extras' component={Extras} />
//         <Route exact path='/bio' component={Bio} />
//         <Route exact path='/contact' component={Contact} />
//
//         <Redirect from="*" to="/"/>
//       </Switch>
//     </article>
//
//     <aside>
//       <Calendar />
//     </aside>
//     <Home />
//
//   </div>
//
//   <div className="footer-wrapper">
//     <Footer />
//   </div>
//
// </div>
