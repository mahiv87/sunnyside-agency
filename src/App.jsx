import { useState } from 'react';
import './App.css';
import Footer from './components/FooterComponent/Footer';
import ImageCluster from './components/ImageClusterComponent/ImageCluster';
import Testimonials from './components/TestimonialsComponent/Testimonials';

function App() {
	return (
		<>
			About Services Projects Contact We are creatives Transform your brand We
			are a full-service creative agency specializing in helping brands grow
			fast. Engage your clients through compelling visuals that do most of the
			marketing for you. Learn more Stand out to the right audience Using a
			collaborative formula of designers, researchers, photographers,
			videographers, and copywriters, we’ll build and extend your brand in
			digital places. Learn more Graphic design Great design makes you
			memorable. We deliver artwork that underscores your brand message and
			captures potential clients’ attention. Photography Increase your
			credibility by getting the most stunning, high-quality photos that improve
			your business image.
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
		</>
	);
}

export default App;
