import facebook from '../../assets/images/icon-facebook.svg';
import instagram from '../../assets/images/icon-instagram.svg';
import twitter from '../../assets/images/icon-twitter.svg';
import pinterest from '../../assets/images/icon-pinterest.svg';

import styles from '../FooterComponent/Footer.module.css';

function Footer() {
	return (
		<div className={styles.container}>
			<p className={styles.title}>sunnyside</p>
			<div>
				<p>About</p>
				<p>Services</p>
				<p>Projects</p>
			</div>
			<div className={styles.iconContainer}>
				<img src={facebook} alt="Facebook logo" />
				<img src={instagram} alt="Instagram logo" />
				<img src={twitter} alt="Twitter logo" />
				<img src={pinterest} alt="Pinterest logo" />
			</div>
		</div>
	);
}

export default Footer;
