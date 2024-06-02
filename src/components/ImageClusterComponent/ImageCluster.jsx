import styles from '../ImageClusterComponent/ImageCluster.module.css';
import Image from './ImageComponent/Image';

import MilkBottles from '../../assets/images/mobile/image-gallery-milkbottles.jpg';
import Cone from '../../assets/images/mobile/image-gallery-cone.jpg';
import SugarCubes from '../../assets/images/mobile/image-gallery-sugar-cubes.jpg';
import Orange from '../../assets/images/mobile/image-gallery-orange.jpg';

function ImageCluster() {
	return (
		<div className={styles.container}>
			<Image imageUrl={MilkBottles} />
			<Image imageUrl={Cone} />
			<Image imageUrl={SugarCubes} />
			<Image imageUrl={Orange} />
		</div>
	);
}

export default ImageCluster;
