// internal imports
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

// app
function App() {
	return (
		<>
			<a className="skip-link" href="#main-content">
				Skip to main content
			</a>
			<Navbar />
			<main id="main-content">
				<Home />
				<About />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

export default App;
