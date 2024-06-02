import PropTypes from 'prop-types';

import styles from '../TestimonialComponent/Testimonial.module.css';

function Testimonial({ avatar, text, author, title }) {
	return (
		<div className={styles.container}>
			<img className={styles.avatar} src={avatar} alt="avatar" />
			<p className={styles.text}>{text}</p>
			<p className={styles.author}>{author}</p>
			<p className={styles.title}>{title}</p>
		</div>
	);
}

Testimonial.propTypes = {
	avatar: PropTypes.string,
	text: PropTypes.string,
	author: PropTypes.string,
	title: PropTypes.string
};

export default Testimonial;
