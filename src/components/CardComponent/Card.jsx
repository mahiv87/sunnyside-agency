import React from 'react';
import PropTypes from 'prop-types';

import styles from '../CardComponent/Card.module.css';

import TransformImg from '../../assets/images/mobile/image-transform.jpg';

function Card(props) {
	return (
		<div className={styles.container}>
			<img
				src={TransformImg}
				alt="An egg on a yellow background"
				className={styles.image}
			/>
			<p className={styles.title}>Transform your brand</p>
			<p className={styles.text}>
				We are a full-service creative agency specializing in helping brands
				grow fast. Engage your clients through compelling visuals that do most
				of the marketing for you.
			</p>
			<p className={styles.link}>LEARN MORE</p>
		</div>
	);
}

Card.propTypes = {};

export default Card;
