import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/bluepetalmedia-logo100.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <img src={avatar}  />
                    <h1><strong>Blue Petal Media</strong></h1>
                     Superior Quality.<br />Fast Turnaround.<br />Happy Clients.
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
