import indexStyles from "../styles/Index.module.css";

export default function Home() {
	return (
		<>
			<div>
				<div className={indexStyles.home}>
					<div className={indexStyles.home__content}>
						{/* Header */}
						<h2>Creative technologist consultant specialized in human-centered design and fullstack web development for websites & applications.</h2>
						<br />
						<br />
						<div>
							<h2>Services:</h2>
							<hr></hr>
							<p>UI/UX & Visual Design</p>
							<hr></hr>
							<p>Accessibility Design</p>
							<hr></hr>
							<p>Fullstack Web Development</p>
							<hr></hr>
							<p>Interactive Data & Content Visualization</p>
							<hr></hr>
							<p>CMS Integration (Shopify, Contentful, Wordpress, etc)</p>
							<hr></hr>
						</div>
						{/* <br />
						<div>
							<h2>Spaces:</h2>
							<hr></hr>
							<p>Lifestyle Brands - eCommerce</p>
							<hr></hr>
							<p>Fitness Brands - eCommerce</p>
							<hr></hr>
							<p>Health Products & Services</p>
							<hr></hr>
							<p>Health & Wellness Businesses</p>
							<hr></hr>
							<p>Healthcare Organizations & Institutions</p>
							<hr></hr>
							<p>Medical Research Institutions</p>
							<hr></hr>
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
}
