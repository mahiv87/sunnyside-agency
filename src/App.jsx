import { useState } from 'react';
import './App.css';
import Footer from './components/FooterComponent/Footer';
import ImageCluster from './components/ImageClusterComponent/ImageCluster';
import Testimonials from './components/TestimonialsComponent/Testimonials';
import Card from './components/CardComponent/Card';
import Hero from './components/HeroComponent/Hero';

function App() {
	return (
		<div>
			<Hero />
			<Card />
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
