// internal imports
import './styles.css';
import linkedin from '../../logos/linkedin.png';
import github from '../../logos/github.png';
import resume from '../../logos/resume.png';
import cv from '../../logos/cv.pdf';
import profilePic from '../../logos/profilePic.jpg';

// home
function Home() {
	return (
		<section id="home" className="hero section-shell" aria-labelledby="hero-title">
			<div className="hero-copy">
				<p className="hero-status">
					<span aria-hidden="true" /> Available for new opportunities
				</p>
				<h1 id="hero-title">
					I build digital experiences that feel <em>effortless</em>
				</h1>
				<p className="hero-lead">
					I’m Ibrahim, a front-end developer focused on turning thoughtful design into fast,
					accessible, and responsive products.
				</p>
				<div className="hero-actions">
					<a className="button button-primary" href="#projects">
						Explore my work <span aria-hidden="true">↗</span>
					</a>
					<a className="button button-secondary" href="#contact">
						Let’s talk
					</a>
				</div>
				<div className="social-links" aria-label="Social profiles">
					<a
						href="https://linkedin.com/in/ibrahim-saeed-88783342a/"
						target="_blank"
						rel="noreferrer"
						aria-label="Ibrahim on LinkedIn"
					>
						<img src={linkedin} alt="" width="22" height="22" />
					</a>
					<a
						href="https://github.com/saeed240"
						target="_blank"
						rel="noreferrer"
						aria-label="Ibrahim on GitHub"
					>
						<img src={github} alt="" width="22" height="22" />
					</a>
					<a href={cv} target="_blank" rel="noopener noreferrer" aria-label="View Ibrahim's CV">
						<img src={resume} alt="" width="22" height="22" />
					</a>
				</div>
			</div>
			<div className="portrait-wrap" aria-label="Portrait of Ibrahim Saeed">
				<img src={profilePic} alt="Ibrahim Saeed" width="440" height="567" fetchPriority="high" />
			</div>
		</section>
	);
}
export default Home;
