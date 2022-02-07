import Head from "next/head";
import PageTitle from "../components/pageTitle/PageTitle";
import ParagraphText from "../components/paragraphText/ParagraphText";
import serviceStyles from "../styles/Services.module.css";

const services = () => {
	return (
		<div className={serviceStyles.services}>
			<Head>
				<title>Services</title>
			</Head>
			<PageTitle title="Services & Expertise" textDescription=""></PageTitle>
			<div className={serviceStyles.services__grid}>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="Front-End Web Development Consulting"
						textDescription="Digital Anthro specializes in architecting UI and data flow for front-end solutions using the modern frameworks such as React and Vue.js."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="Javascript Web Development"
						textDescription="Digital Anthro builds interactive experiences, websites and apps utilizing full-stack javascript development and modern web practices."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="WebGL Development"
						textDescription="Digital Anthro works with clients in need of implementing highly interactive components for their website such as web animations, visual effects, data viz, 3D product customizers and more."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="Interaction Strategy & Design"
						textDescription="Digital Anthro specializes in building interaction design systems for websites and apps using modern component-based approaches for scalability and flexibility."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="UI/UX Strategy & Design"
						textDescription="Digital Anthro specializes in building UI/UX design systems for websites and apps using modern component-based approaches for scalability and flexibility."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="Visual Design"
						textDescription="Digital Anthro works with clients from the initial design exploration phase to implementation of website or app redesigns."
					></ParagraphText>
				</div>

				{/* <div className={serviceStyles.services__grid__item}>
				<ParagraphText
					textTitle="Interactive Installations"
					textDescription="Digital Anthro provides consulting and development of interactive real-time installations, visualizations and audiovisual projects utilizing Touchdesigner."
				></ParagraphText>
			</div> */}
				{/* <div className={serviceStyles.services__grid__item}>
				<ParagraphText
					textTitle="Shopify E-Commerce"
					textDescription="Digital Anthro is a proud Shopify Partner. We work with DTC Shopify businesses designing and building modern storefronts and product microsites."
				></ParagraphText>
			</div> */}
			</div>
		</div>
	);
};

export default services;
