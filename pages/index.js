import indexStyles from "../styles/Index.module.css";

export default function Home() {
	return (
		<div>
			<div className={indexStyles.home}>
				<div className={indexStyles.home__content}>
					<h1>Digital Anthro</h1>
					<p>
						Digital Anthro is an independent research & design studio specialized in human-centered design and development for web, mobile & physical
						spaces. The studio was founded in 2018 to help forward-thinking brands, organizations and institutions build interactive data-driven
						experiences in digital and physical environments. The Digital Anthro mission is one of design, technology and human behavior. The mission
						is simply to design and build impactful user experiences.
					</p>
					<br />
					<div>
						<h2>Services:</h2>
						<hr></hr>
						<p>Content & Data Strategy</p>
						<hr></hr>
						<p>UI/UX Design</p>
						<hr></hr>
						<p>Design Systems - Data & Interface Design</p>
						<hr></hr>
						<p>Frontend Web Development</p>
						<hr></hr>
						<p>Data Visualization - Web-based and Physical Installations</p>
						<hr></hr>
						<p>Headless CMS Integration</p>
						<hr></hr>
					</div>
					<br />
					<div>
						<h2>Spaces:</h2>
						<hr></hr>
						<p>Lifestyle Brands & E-Commerce</p>
						<hr></hr>
						<p>Health & Wellness Brands & Organizations</p>
						<hr></hr>
						<p>E-learning Brands & Organizations</p>
						<hr></hr>
						<p>Cultural & Art Organizations and Institutions</p>
						<hr></hr>
					</div>
				</div>
			</div>
		</div>
	);
}
