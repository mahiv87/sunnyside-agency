import styles from '../ImageClusterComponent/ImageCluster.module.css';
import Image from './ImageComponent/Image';

import MilkBottles from '../../assets/images/desktop/image-gallery-milkbottles.jpg';
import Cone from '../../assets/images/desktop/image-gallery-cone.jpg';
import SugarCubes from '../../assets/images/desktop/image-gallery-sugarcubes.jpg';
import Orange from '../../assets/images/desktop/image-gallery-orange.jpg';

function ImageCluster() {
	return (
		<div className={styles.container}>
			<Image imageUrl={MilkBottles} />
			<Image imageUrl={Orange} />
			<Image imageUrl={Cone} />
			<Image imageUrl={SugarCubes} />
		</div>
	);
}

export default ImageCluster;
