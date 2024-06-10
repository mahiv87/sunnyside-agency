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
import SecondaryCard from './components/CardComponents/SecondaryCard/SecondaryCard';

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
			<SecondaryCard
				image={GraphicDesignImage}
				title="Graphic Design"
				text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
				color="hsl(167, 40%, 24%)"
			/>
			<SecondaryCard
				image={PhotographyImage}
				title="Photography"
				text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
				color="hsl(198, 62%, 26%)"
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
