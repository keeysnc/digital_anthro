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
						textTitle="Visual Design"
						textDescription="Our design process consists of phases from exploration and planning to hi-fidelity designs and prototypes."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="Web Development"
						textDescription="We use Webflow to develop mobile, tablet and desktop responsive websites, landing pages, product pages and microsites."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="Immersive & Interactive Web Development"
						textDescription="We specialize in design & development of immersive and interactive websites. This includes data visualization, interactive storytelling, and websites with highly interactive components."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="Front-End Web Development & Consulting"
						textDescription="Digital Anthro works with clients to architect UI and front-end data flows on medium to large websites and applications using modern frameworks such as React and Vue.js."
					></ParagraphText>
				</div>
				{/* <div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="WebGL Development"
						textDescription="We implement highly interactive components for websites such as web animations, visual effects, data viz, 3D product customizers and more."
					></ParagraphText>
				</div> */}
				{/* <div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="UI/UX Strategy & Design"
						textDescription="Digital Anthro specializes in building design systems for websites and apps using modern component-based approaches for scalability and flexibility."
					></ParagraphText>
				</div> */}

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
