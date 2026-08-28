// internal imports
import './styles.css';
import html from '../../logos/html.png';
import css from '../../logos/css3.png';
import javascript from '../../logos/javascript.png';
import git from '../../logos/git.png';
import typescript from '../../logos/typescript.png';
import github from '../../logos/github.png';
import tailwind from '../../logos/tailwind.png';

// skills
const skills = [
	[html, 'HTML'],
	[css, 'CSS'],
	[javascript, 'JavaScript'],
	[typescript, 'TypeScript'],
	[null, 'React'],
	[tailwind, 'Tailwind CSS'],
	[git, 'Git'],
	[github, 'GitHub'],
];

// experience
const experience = [
	{
		role: 'Computing Teacher',
		company: 'An-Nasr Academy School',
		date: '2023 — 2025',
		copy: 'Delivered digital literacy, internet safety, and practical computing education while supporting the school’s technology initiatives.',
	},
	{
		role: 'Verification Officer',
		company: 'Electoral Commission of Ghana',
		date: '2024',
		copy: 'Verified identity records with accuracy, identified discrepancies, and maintained reliable registration data.',
	},
	{
		role: 'ICT Teacher',
		company: 'National Service Scheme, Ghana',
		date: '2022 — 2023',
		copy: 'Taught computer fundamentals, productivity tools, cybersecurity awareness, and effective online communication.',
	},
];

// about section
function About() {
	return (
		<section id="about" className="about-section">
			<div className="section-shell">
				<p className="eyebrow">About me</p>
				<div className="about-intro">
					<h2 className="section-heading">
						Curious by nature
						<br />
						Intentional by design
					</h2>
					<div>
						<p>
							I specialize in JavaScript and React, creating interfaces that balance visual detail
							with clean, maintainable code.
						</p>
						<p>
							My background in teaching shapes how I work: communicate clearly, solve patiently, and
							make complex ideas feel approachable.
						</p>
					</div>
				</div>
				<div className="skills-block">
					<p className="block-label">Tools I work with</p>
					<ul className="skill-list" aria-label="Technical skills">
						{skills.map(([icon, name]) => (
							<li key={name}>
								{icon ? (
									<img src={icon} alt="" width="34" height="34" loading="lazy" />
								) : (
									<span className="react-mark" aria-hidden="true">
										⚛
									</span>
								)}
								<span>{name}</span>
							</li>
						))}
					</ul>
				</div>
				<div id="experience" className="experience-block">
					<p className="block-label">Experience</p>
					<div className="timeline">
						{experience.map((item) => (
							<article className="timeline-item" key={item.role}>
								<p className="timeline-date">{item.date}</p>
								<div>
									<h3>{item.role}</h3>
									<p className="company">{item.company}</p>
									<p>{item.copy}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
export default About;
