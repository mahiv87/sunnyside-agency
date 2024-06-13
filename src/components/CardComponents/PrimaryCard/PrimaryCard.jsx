import PropTypes from 'prop-types';

import styles from './PrimaryCard.module.css';

function Card({ image, altTag, title, text, link, underlineColor }) {
	return (
		<div className={styles.container}>
			<img src={image} alt={altTag} className={styles.image} />
			<p className={styles.title}>{title}</p>
			<p className={styles.text}>{text}</p>
			<p className={styles.link}>{link}</p>
			<div
				className={styles.underline}
				style={{ backgroundColor: underlineColor }}
			></div>
		</div>
	);
}

Card.propTypes = {
	image: PropTypes.string.isRequired,
	altTag: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	underlineColor: PropTypes.string.isRequired
};

export default Card;
