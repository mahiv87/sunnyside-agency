import { useState } from 'react';

import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/images/icon-hamburger.svg';
import ArrowImage from '../../assets/images/icon-arrow-down.svg';
import styles from '../HeroComponent/Hero.module.css';

function Hero() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div>
			<div className={styles.container}>
				<div className={styles.nav}>
					<img src={logo} alt="sunnyside logo" />
					<img
						src={hamburger}
						alt="hamburger icon for menu"
						className={styles.menu}
						id="menu"
						onClick={toggleMenu}
					/>
				</div>
				{menuOpen && (
					<div className={`${styles.dropdown} ${menuOpen ? styles.show : ''}`}>
						<ul>
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#"></a>Services
							</li>
							<li>
								<a href="#"></a>Projects
							</li>
							<li>
								<a href="#"></a>CONTACT
							</li>
						</ul>
					</div>
				)}
				<p className={styles.title}>WE ARE CREATIVES</p>
				<img src={ArrowImage} alt="A white arrow pointing downwards" />
			</div>
		</div>
	);
}

export default Hero;
