import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.youtube.com/user/zellkz/videos" className="icon fa-youtube"><span className="label">YouTube</span></a></li>
                        <li><a href="#contact" className="icon fa-envelope-o"><span className="label">Contact Me</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; My Company</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
