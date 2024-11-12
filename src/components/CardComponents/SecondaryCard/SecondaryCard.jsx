import PropTypes from 'prop-types';

import styles from './SecondaryCard.module.css';

function SecondaryCard({ image, title, text, color }) {
	return (
		<div
			style={{
				backgroundImage: `url(${image})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}
			className={styles.container}
		>
			<div className={styles.cardInfo}>
				<p style={{ color: `${color}` }} className={styles.title}>
					{title}
				</p>
				<p style={{ color: `${color}` }} className={styles.text}>
					{text}
				</p>
			</div>
		</div>
	);
}

SecondaryCard.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired
};

export default SecondaryCard;
