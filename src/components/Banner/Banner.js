import React from 'react';
import './Banner.css';

import BannerMobile from './banner_mobile.png';
import BannerDesktop from './banner_desktop.png';

export default ( props ) => (

    <div className="banner">
        <picture className="banner__image">
            <source srcset={ BannerMobile } media="(max-width: 479px)" />
            <img src={ BannerDesktop } alt={ props.imgAlt } className="banner__image"/>
        </picture>
    </div>

);