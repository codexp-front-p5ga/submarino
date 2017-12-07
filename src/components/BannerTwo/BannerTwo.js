import React from 'react';
import './BannerTwo.css';

import Sports from './esporte.png';
import Styles from './estilo.png';
import Games from './games.png';
import Geek from './geek.png';
import Pop from './pop.png';
import Tech from './tech.png';

import BannerTwoCard from '../BannerTwoCard/BannerTwoCard';

export default ( props ) => (
    <section className="banner-two">
        <BannerTwoCard imageSource={ Sports } imageAlt="sports section" />
        <BannerTwoCard imageSource={ Games } imageAlt="games section" />
        <BannerTwoCard imageSource={ Styles } imageAlt="styles section" />
        <BannerTwoCard imageSource={ Geek } imageAlt="geek section" />
        <BannerTwoCard imageSource={ Pop } imageAlt="pop section" />
        <BannerTwoCard imageSource={ Tech } imageAlt="tech section" />
    </section>
);
