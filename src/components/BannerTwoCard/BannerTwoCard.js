import React from 'react';
import './BannerTwoCard.css';

export default ( props ) => (

    <div className="banner-two__card">
        <img src={ props.imageSource } alt={ props.imageAlt } />
    </div>

);