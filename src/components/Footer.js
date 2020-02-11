import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.youtube.com/user/zellkz/videos" className="icon" title="YouTube"><span className="fab fa-youtube"></span><span className="label">YouTube</span></a></li>
                        <li><a href="#contact" className="icon"><span className="fas fa-envelope" title="Contact Me"></span><span className="label">Contact Me</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; {new Date().getFullYear()}  Blue Petal Media</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
