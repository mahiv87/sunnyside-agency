import Testimonial from './TestimonialComponent/Testimonial';

import EmilyR from '../../assets/images/image-emily.jpg';
import ThomasS from '../../assets/images/image-thomas.jpg';
import JennieF from '../../assets/images/image-jennie.jpg';

function Testimonials() {
	return (
		<div>
			<p>CLIENT TESTIMONIALS</p>
			<Testimonial
				avatar={EmilyR}
				text={'Test'}
				author={'Emily R.'}
				title={'Marketing Director'}
			/>
		</div>
	);
}

export default Testimonials;
