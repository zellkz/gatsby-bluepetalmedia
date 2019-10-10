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
        thumbnail: 'https://i9.ytimg.com/vi/072UXpATY6M/mqdefault.jpg?time=1568400053472&sqp=CIDF7-sF&rs=AOn4CLCtdF4ukLNA8AxOVkgQsJ7uL6oXnw',
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
        const siteTitle = "Gatsby Starter - Strata"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Ipsum lorem dolor aliquam ante commodo<br />
                            magna sed accumsan arcu neque.</h2>
                        </header>
                        <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </section>

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
                        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <a name="contact" />
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
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