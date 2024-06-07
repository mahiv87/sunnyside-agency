import React from 'react';

import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/images/icon-hamburger.svg';
import ArrowImage from '../../assets/images/icon-arrow-down.svg';
import styles from '../HeroComponent/Hero.module.css';

function Hero() {
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.nav}>
					<img src={logo} alt="sunnyside logo" />
					<img src={hamburger} alt="hamburger icon for menu" />
				</div>
				<p className={styles.title}>WE ARE CREATIVES</p>
				<img src={ArrowImage} alt="" />
			</div>
		</div>
	);
}

export default Hero;
