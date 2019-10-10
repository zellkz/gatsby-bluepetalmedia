import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

const DEFAULT_VIDEOS = [
    {
        id: '1',
        videoId: 'IjbGvuCMkXg',
        thumbnail: 'https://i3.ytimg.com/vi/IjbGvuCMkXg/maxresdefault.jpg',
        caption: 'Serenity in the Woods',
        description: 'Property video for VRBO + Airbnb operator'
    },
    {
        id: '2',
        videoId: 'JCnUjwqSKR0',
        thumbnail: 'https://i3.ytimg.com/vi/JCnUjwqSKR0/mqdefault.jpg',
        caption: 'DJI Mavic - Get Out and Fly',
        description: 'DJI Mavic drone commercial'
    },
    {
        id: '3',
        videoId: 'b1phcwAkeQo',
        thumbnail: 'https://i3.ytimg.com/vi/b1phcwAkeQo/mqdefault.jpg',
        caption: 'Summer Fun',
        description: 'Florida condominium vacation experience promotional video'
    },
    {
        id: '4',
        videoId: 'zcd0ybjY5wI',
        thumbnail: 'https://i3.ytimg.com/vi/zcd0ybjY5wI/maxresdefault.jpg',
        caption: 'Pere Marquette State Park',
        description: 'Aerial promotional video for state park'
    },
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Blue Petal Media"
        const siteDescription = "Blue Petal Media delivers excellence in videography and photography."

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_VIDEOS.map(({ id, videoId, thumbnail, caption, description }) => ({
                            videoId,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="https://www.youtube.com/user/zellkz/videos" className="button">
                                <span className="icon fa-youtube"></span> Full Portfolio
                            </a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p></p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <a name="contact" />
                                <form name="contact" method="post" data-netlify="true" netlify-honeypot="phone">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>

                                    </div>
                                    <div className="row uniform 50%">
                                        <div className="12u">
                                            <ul className="actions">
                                                <li><input type="submit" value="Send Message" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div style={{display: 'none'}}>
                                        <input type="text" name="phone" />
                                    </div>
                                </form>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        St. Louis, Missouri<br />
                                        United States
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex