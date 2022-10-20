import Head from "next/head";
import aboutStyles from "../styles/About.module.css";
import indexStyles from "../styles/Index.module.css";

const about = () => {
	const img = "/profile-img-da.png";
	return (
		<div className={indexStyles.home}>
			<div className={indexStyles.home__content}>
				<div className={aboutStyles.about}>
					<Head>
						<title>Resume</title>
					</Head>

					<div>
						<h2>Experience</h2>
						<p>
							<strong>Accenture</strong> <br></br> Full Stack Web Developer<br></br> <small>December 2019 - Present</small>
							<br></br> Worked across a variety of government sectors implementing frontend development solutions for enterprise applications and
							websites using Twig, React & Typescript.
						</p>
						<br />
						<p>
							<strong>Westat</strong> <br></br>Frontend Drupal Developer Contractor<br></br> <small>October 2019 - December 2019</small>
							<br></br> Assisted in the ux consulting and frontend web development of a Drupal based health research website for NIH.
						</p>
						<br />
						<p>
							<strong>Digital Anthro, LLC</strong> <br></br> Owner / Creative Technologist<br></br> <small>October 2019 - Present</small>
							<br></br> I started Digital Anthro, LLC as a consultancy specialized in ui/ux design and web development. I've worked with brands and
							companies to help them build digital products with a focus on user experience and human-centric design principles.
						</p>
						<br />
						<p>
							<strong>RP3 Agency</strong> <br></br> Creative Technologist<br></br> <small>Aug 1, 2017 - September 2019</small>
							<br></br> I started as a UI/UX developer contractor and eventually accepted a full time role as a Creative Technologist in RP3's
							creative department. I worked as a hybrid designer and frontend developer creating websites & digital experiences for brands such as
							Norfolk Southern, Giant and HRCI. During RP3's most current rebranding I lead the frontend development of the new RP3 website.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default about;
