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
			<PageTitle
				title="Services & Expertise"
				textDescription="Digital Anthro uses modern component-based front-end development architecture to create scalable and easily maintainable interfaces. At Digital Anthro we exclusively work with Javascript frameworks React & Vue.js."
			></PageTitle>
			<div className={serviceStyles.services__grid}>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="React Web Development"
						textDescription="The React framework has grown to be a mature technology for user interface development and handling data on the frontend if your application. Digital Anthro chose this framework as a primary tool because of it's large community of plugins, tools, and integrations with modern decoupled CMS's such as Contentful or Prismic CMS. Creating an interface using React makes it easier to rework, scale and move around your front-end."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="React & UI/UX Consulting"
						textDescription="Digital Anthro works with companies to help solve complex UI/UX design & development architectual situations. Our specialities in consulting cover React, React Native, Shopify Headless Development, Shopify App Development ."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="Web-Based Data Visualization"
						textDescription="Displaying data on your front-end has become more complex over the years. Digital Anthro utilizes React & Vue.js in combination with interactive front-end tools such as D3.js and Three.js to create beautiful data visualizations that display clear information to your users."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="React/Node.js Shopify App Development"
						textDescription="Digital Anthro is a Shopify Partner. We build Shopify apps for stores in need of custom features that aren't found in Shopify Marketplace."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="UI & UX Design Systems"
						textDescription="Creating a design system for your application or Shopify storefront is key for scalibility, UI structure and peice of mind. Using design thinking principles and steps we work with companies to create a structured user interface design system that can be easily modified down the road."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="Front-End Security Consulting"
						textDescription="Due to the increase of single page apps and interactive web experiences data is being handled at times in the front-end which can easily be accessed by malicious users. Digital Anthro is certified in Ethical Hacking and knowledgeable of best security practices and methods of protecting your interfaces from users with bad intentions."
					></ParagraphText>
				</div>
			</div>
		</div>
	);
};

export default services;
