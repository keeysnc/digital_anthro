import indexStyles from "../styles/Index.module.css";

export default function Home() {
	return (
		<div>
			<div className={indexStyles.home}>
				<div className={indexStyles.home__content}>
					{/* <h1>Digital Anthro</h1> */}
					<h2>
						Fullstack web developer, designer & multidisciplinary artist specialized in human-centered design and development for websites &
						applications.
					</h2>
					<br />
					<br />
					<div>
						<h2>Services:</h2>
						<hr></hr>
						<p>UI/UX Design & Consulting</p>
						<hr></hr>
						<p>Accessibility Design</p>
						<hr></hr>
						<p>Frontend & UI Development</p>
						<hr></hr>
						<p>Backend API Development</p>
						<hr></hr>
						<p>CMS Integration (Shopify, Contentful, Wordpress, etc)</p>
						<hr></hr>
						<p>Web-based & Physical Space Data Visualization</p>
					</div>
					<br />
					{/* <div>
						<h2>Spaces:</h2>
						<hr></hr>
						<p>Lifestyle Brands - eCommerce</p>
						<hr></hr>
						<p>Fitness Brands - eCommerce</p>
						<hr></hr>
						<p>Digital Health Products & Services</p>
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
	);
}
