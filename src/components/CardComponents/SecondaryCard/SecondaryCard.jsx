import PropTypes from 'prop-types';

function SecondaryCard({ image, title, text }) {
	return (
		<div>
			<p>{title}</p>
			<p>{text}</p>
		</div>
	);
}

SecondaryCard.propTypes = {};

export default SecondaryCard;
