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
					<h1>Services & Expertise</h1>
					<h3>UI/UX & Experience Design</h3>
					<h3>Full Stack Javascript Development</h3>
					<h3>Three.js/WebGL Development</h3>
					<h3>Cloud/Headless CMS Integration</h3>
					<h3>Third Pary API Integrations</h3>
					<h3>Node.js API Development</h3>
				</div>
			</div>
		</div>
	);
};

export default services;
