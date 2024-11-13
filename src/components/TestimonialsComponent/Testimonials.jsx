import Testimonial from './TestimonialComponent/Testimonial';
import styles from '../TestimonialsComponent/Testimonials.module.css';

import EmilyR from '../../assets/images/image-emily.jpg';
import ThomasS from '../../assets/images/image-thomas.jpg';
import JennieF from '../../assets/images/image-jennie.jpg';

function Testimonials() {
	return (
		<div className={styles.container}>
			<p className={styles.title}>CLIENT TESTIMONIALS</p>
			<div className={styles.testimonialContainer}>
				<Testimonial
					avatar={EmilyR}
					text={
						'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
					}
					author={'Emily R.'}
					title={'Marketing Director'}
				/>
				<Testimonial
					avatar={ThomasS}
					text={
						'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
					}
					author={'Thomas S.'}
					title={'Chief Operating Officer'}
				/>
				<Testimonial
					avatar={JennieF}
					text={
						'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
					}
					author={'Jennie F.'}
					title={'Business Owner'}
				/>
			</div>
		</div>
	);
}

export default Testimonials;
