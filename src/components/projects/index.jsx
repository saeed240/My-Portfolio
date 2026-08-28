// internal imports
import './styles.css';

// projects constant
const projects = [
	{
		number: '01',
		title: 'Portfolio',
		type: 'React · Responsive UI',
		description:
			'A personal portfolio designed to present work with clarity, speed, and a strong visual identity.',
		href: 'https://github.com/saeed240/My-Portfolio',
	},
	{
		number: '02',
		title: 'Nextcent',
		type: 'Landing page · UI build',
		description:
			'A polished marketing page translated from design into a responsive, reusable front-end experience.',
		href: 'https://github.com/saeed240/Nextcent_v1',
	},
	{
		number: '03',
		title: 'Drum Machine',
		type: 'Interactive app · JavaScript',
		description:
			'A tactile browser-based drum machine with keyboard controls and immediate audiovisual feedback.',
		href: 'https://github.com/saeed240/Drum-Machine',
	},
];

// project func
function Projects() {
	return (
		<section
			id="projects"
			className="projects-section section-shell"
			aria-labelledby="projects-title"
		>
			<p className="eyebrow">Selected work</p>
			<h2 id="projects-title" className="section-heading">
				Projects built with purpose
			</h2>
			<p className="section-intro">
				A few things I’ve created while sharpening my craft and solving real interface problems.
			</p>
			<div className="project-grid">
				{projects.map((project) => (
					<article className="project-card" key={project.title}>
						<div className="project-top">
							<span>{project.number}</span>
							<a
								href={project.href}
								target="_blank"
								rel="noreferrer"
								aria-label={`View ${project.title} on GitHub`}
							>
								↗
							</a>
						</div>
						<div>
							<p className="project-type">{project.type}</p>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
export default Projects;
