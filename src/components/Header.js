import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/bluepetal.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <h1><strong>Blue Petal Media</strong></h1>
                     We create stunning works of film and imagery using top of the line equipment from cameras to drones.
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
