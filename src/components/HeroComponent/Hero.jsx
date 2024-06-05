import React from 'react';

import ArrowImage from '../../assets/images/icon-arrow-down.svg';
import styles from '../HeroComponent/Hero.module.css';

function Hero() {
	return (
		<div className={styles.container}>
			<p className={styles.title}>WE ARE CREATIVES</p>
			<img src={ArrowImage} alt="" />
		</div>
	);
}

export default Hero;
