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
						textDescription="Digital Anthro simplifies the complexities that come with building and maintaining a performant web interface for your users. We use modern front-end technologies and frameworks to build responsive, interactive and secure front-end solutions."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="UI & UX Design Systems"
						textDescription="Creating a design system for your application or website is key for easy scalibility and visual brand consistency. Using design thinking principles we work with companies to create modern sleek designs that will give your users a delightful experience."
					></ParagraphText>
				</div>

				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="Interactive & Data Visualization Websites"
						textDescription="Displaying data through your applications UI has become more complex over the years. Digital Anthro utilizes front-end technologies in combination with interactive and data visualization tools to create beautiful web experiences that display clear information to your users."
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="CMS Integration"
						textDescription="Digital Anthro consults with companies who would like to integrate their websites with content management systems such as Wordpress, Contentful, Prismic CMS and more."
						link="https://www.sanity.io/blog/headless-cms-explained"
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="UI/UX Design/Front-End Web Development Consulting & Workshops"
						textDescription="Digital Anthro works with companies to help solve complex UI/UX design & development architectural situations. Our consultancy covers Full Stack Javascript Development, UI/UX Design, CMS integrations and Interactive/Data Visualization Development"
					></ParagraphText>
				</div>
				<div className={serviceStyles.services__grid__item}>
					<ParagraphText
						textTitle="Website & Application Security Consulting"
						textDescription="Due to the increase of single page apps, and interactive web experiences, data is being handled more in the UI layer of applications. This can easily be accessed by malicious users. Digital Anthro is specialized and knowledgeable of best security practices and methods of protecting your interfaces from users with bad intentions."
					></ParagraphText>
				</div>
			</div>
		</div>
	);
};

export default services;
