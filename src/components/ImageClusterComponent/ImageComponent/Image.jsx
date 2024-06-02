import PropTypes from 'prop-types';

import styles from '../ImageComponent/Image.module.css';

function Image({ imageUrl }) {
	return (
		<div
			style={{ backgroundImage: { imageUrl } }}
			className={styles.image}
		></div>
	);
}

Image.propTypes = {
	imageUrl: PropTypes.string
};

export default Image;
