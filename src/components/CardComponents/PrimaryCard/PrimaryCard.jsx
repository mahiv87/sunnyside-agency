import PropTypes from 'prop-types';

import styles from './PrimaryCard.module.css';

function Card({ image, title, text, link }) {
	return (
		<div className={styles.container}>
			<img
				src={image}
				alt="An egg on a yellow background"
				className={styles.image}
			/>
			<p className={styles.title}>{title}</p>
			<p className={styles.text}>{text}</p>
			<p className={styles.link}>{link}</p>
		</div>
	);
}

Card.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	link: PropTypes.string
};

export default Card;
