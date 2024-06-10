import { useState } from 'react';
import './App.css';
import Footer from './components/FooterComponent/Footer';
import ImageCluster from './components/ImageClusterComponent/ImageCluster';
import Testimonials from './components/TestimonialsComponent/Testimonials';
import Card from './components/CardComponents/PrimaryCard/PrimaryCard';
import Hero from './components/HeroComponent/Hero';
import TransformImage from './assets/images/mobile/image-transform.jpg';
import StandOutImage from './assets/images/mobile/image-stand-out.jpg';
import GraphicDesignImage from './assets/images/mobile/image-graphic-design.jpg';
import PhotographyImage from './assets/images/mobile/image-photography.jpg';

function App() {
	return (
		<div>
			<Hero />
			<Card
				image={TransformImage}
				title="Transform your brand"
				text="We are a full-service creative agency specializing in helping brands
				grow fast. Engage your clients through compelling visuals that do most
				of the marketing for you."
				link="LEARN MORE"
			/>
			<Card
				image={StandOutImage}
				title="Stand out to the right audience"
				text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
				link="LEARN MORE"
			/>
			<Card
				image={GraphicDesignImage}
				title="Graphic design"
				text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
				link=""
			/>
			<Card
				image={PhotographyImage}
				title="Photography"
				text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
				link=""
			/>
			<Testimonials />
			<ImageCluster />
			<Footer />
			<div className="attribution">
				Challenge by{' '}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by <a href="#">Your Name Here</a>.
			</div>
		</div>
	);
}

export default App;
