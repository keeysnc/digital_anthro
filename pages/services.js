import Head from "next/head";
import PageTitle from "../components/pageTitle/PageTitle";
import ParagraphText from "../components/paragraphText/ParagraphText";
import indexStyles from "../styles/Index.module.css";
import serviceStyles from "../styles/Services.module.css";

const services = () => {
	return (
		<div className={indexStyles.home}>
			<div className={indexStyles.home__content}>
				<Head>
					<title>Services</title>
				</Head>
				<div style={{ textAlign: "center" }}>
					<h1>Services & Technologies</h1>
					<h3>Visual Branding</h3>
					<h3>Experience Design</h3>
					<h3>React Development</h3>
					<h3>Next.js Development</h3>
					<h3>Cloud/Headless CMS Integration</h3>
					<h3>Shopify E-commerce Development</h3>
				</div>
			</div>
		</div>
	);
};

export default services;
