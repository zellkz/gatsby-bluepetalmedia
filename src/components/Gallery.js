import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from "react-images";
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

class Gallery extends Component {
    constructor () {
        super();

        this.state = {
            lightboxIsOpen: false,
            selectedIndex: 0,
            isOpen: false,
            videoId: null
        };
        
        this.toggleLightbox = this.toggleLightbox.bind(this);
        this.openModal = this.openModal.bind(this);
    }
    openModal (videoId) {
        this.setState({
            isOpen: true,
            videoId: videoId
        })
    }
    toggleLightbox(selectedIndex) {
        this.setState(state => ({
            lightboxIsOpen: !state.lightboxIsOpen,
            selectedIndex
        }));
    }
    renderGallery (images) {
        if (!images) return;

        const gallery = images.map((obj, i) => {

            if (obj.videoId) {
                return (
                    <article className="6u 12u$(xsmall) work-item" key={i}>
                        <a
                            className="image fit thumb"
                            href="#"
                            onClick={e => {
                                e.preventDefault();
                                this.openModal(obj.videoId);
                            }}
                        >
                            <img src={obj.thumbnail} />
                        </a>

                        <h3>{obj.caption}</h3>
                        <p>{obj.description}</p>
                    </article>
                );
            } else {
                return (
                    <article className="6u 12u$(xsmall) work-item" key={i}>
                        <a
                            className="image fit thumb"
                            href={obj.source}
                            onClick={e => {
                                e.preventDefault();
                                this.toggleLightbox(i);
                            }}
                        >
                            <img src={obj.thumbnail} />
                        </a>

                        <h3>{obj.caption}</h3>
                        <p>{obj.description}</p>
                    </article>
                );
            }
        });

        return (
            <div className="row">
                {gallery}
            </div>
        );
    }
    render () {
        const { images } = this.props;
        const { selectedIndex, lightboxIsOpen } = this.state;

        return (
            <div>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.videoId} onClose={() => this.setState({isOpen: false})} />
                {this.renderGallery(images)}
                <ModalGateway>
                    {lightboxIsOpen && (
                        <Modal onClose={this.toggleLightbox}>
                            <Carousel currentIndex={selectedIndex} views={images} />
                        </Modal>
                    )}
                </ModalGateway>
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;