import { useEffect, useState } from 'react';

// internal imports
import './styles.css';

const links = [
	['home', 'Home'],
	['about', 'About'],
	['projects', 'Projects'],
	['contact', 'Contact'],
];

// navbar
function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const closeOnEscape = (event) => event.key === 'Escape' && setMenuOpen(false);
		window.addEventListener('keydown', closeOnEscape);
		return () => window.removeEventListener('keydown', closeOnEscape);
	}, []);

	return (
		<header className="site-header">
			<nav className="navbar" aria-label="Primary navigation">
				<a className="brand" href="#home" aria-label="Ibrahim Saeed, home">
					<span>Ibrahim.</span>
				</a>
				<button
					className="menu-toggle"
					type="button"
					aria-controls="primary-menu"
					aria-expanded={menuOpen}
					aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
					onClick={() => setMenuOpen((open) => !open)}
				>
					<span className="menu-bar" />
					<span className="menu-bar" />
					<span className="menu-bar" />
				</button>
				<ul id="primary-menu" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
					{links.map(([id, label]) => (
						<li key={id}>
							<a
								href={`#${id}`}
								onClick={() => setMenuOpen(false)}
								className={id === 'contact' ? 'nav-cta' : ''}
							>
								{label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
