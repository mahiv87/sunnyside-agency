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
					<div className={styles.menu}>
						<ul>
							<li>About</li>
							<li>Services</li>
							<li>Projects</li>
							<li className={styles.contactBtn}>CONTACT</li>
						</ul>
					</div>

					{/* Mobile */}
					<img
						src={hamburger}
						alt="hamburger icon for menu"
						className={styles.hamburger}
						id="menu"
						onClick={toggleMenu}
					/>
				</div>
				{menuOpen && (
					<div className={`${styles.dropdown} ${menuOpen ? styles.show : ''}`}>
						<ul>
							<li>About</li>
							<li>Services</li>
							<li>Projects</li>
							<li className={styles.contactBtn}>CONTACT</li>
						</ul>
					</div>
				)}
				<p className={styles.title}>WE ARE CREATIVES</p>
				<img
					src={ArrowImage}
					className={styles.arrow}
					alt="A white arrow pointing downwards"
				/>
			</div>
		</div>
	);
}

export default Hero;
