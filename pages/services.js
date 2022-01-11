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
						textTitle="Front-End Web Development"
						textDescription="Digital Anthro specializes in building modern front-end solutions for websites, apps and other digital experiences."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="Web Design & Development"
						textDescription="Digital Anthro designs and builds microsites, landing pages and interactive one pagers for brands, organizations and start-ups."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="UI/UX & Interaction Design"
						textDescription="We specialize in designing user interfaces for digital experiences using modern component-based approaches for scalability and flexibility."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="Creative Development"
						textDescription="We storyboard, design, prototype and execute front-end solutions for immersive websites utilizing elements such as 3D rendering, animation, audio or video."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="Shopify E-Commerce"
						textDescription="Digital Anthro is a proud Shopify Partner. We work with DTC Shopify businesses designing and building modern storefronts and product microsites."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="Creative Tech Workshops"
						textDescription="We occassionally host creative technology workshops that focus on creating digital and real-time interactive experiences."
					></ParagraphText>
				</div>
			</div>
		</div>
	);
};

export default services;
