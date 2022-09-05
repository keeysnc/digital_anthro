import Head from "next/head";
import indexStyles from "../styles/Index.module.css";

const services = () => {
	return (
		<div className={indexStyles.home}>
			<div className={indexStyles.home__content}>
				<Head>
					<title>Services</title>
				</Head>
				<div className={indexStyles.service__info}>
					<div>
						<h1>Services:</h1>
						<h3>Identity Branding</h3>
						<h3>UI/UX Design</h3>
						<h3>Web Design (Webflow)</h3>
						<h3>Shopify eCommerce</h3>
						<h3>Content Management System Integration</h3>
						<h3>Frontend Web & Mobile App Development</h3>
						<h3>React Development & Consulting</h3>
					</div>
					<br />
					<hr></hr>
					<br />
					<div>
						<h1>Spaces:</h1>
						<h3>Lifestyle Brands & E-Commerce</h3>
						<h3>Health & Wellness Brands & Organizations</h3>
						<h3>E-learning Brands & Organizations</h3>
						<h3>Cultural & Art Organizations and Institutions</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default services;
