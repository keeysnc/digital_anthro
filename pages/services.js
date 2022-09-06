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
						<hr></hr>
						<p>Experience Design</p>
						<hr></hr>
						<p>React Development & Consulting</p>
						<hr></hr>
						<p>Content Management System Integration</p>
						<hr></hr>
						<p>Web Development</p>
						<hr></hr>
						<p>Data Visualization</p>
						<hr></hr>
					</div>
					<br />
					<div>
						<h1>Spaces:</h1>
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
};

export default services;
