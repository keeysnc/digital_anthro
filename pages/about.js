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
						<title>About</title>
					</Head>
					<div>
						<h2>Meet the Technologist</h2>
						<div className={aboutStyles.about__container}>
							<div className={aboutStyles.about__image}>
								<img style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} src={img} />
							</div>
							<div className={aboutStyles.about__content}>
								<p>
									Nathan Keeys is a creative technologist consultant and the founder of Digital Anthro with 8+ years experience working with a variety
									of brands and companies. He has designed and developed websites and applications for notable brands and organizations such as
									Accenture, Children&apos;s Hospital, Giant, and PenFed Credit Union. In 2018 Nathan started Digital Anthro as an independent
									consultancy helping businesses design & build interactive websites and experiences. As a consultant on user experience and interface
									design, Nathan works primarily with frontend, and javascript technologies ( such as
									<a href="https://reactjs.org/" target="_blank" rel="noreferrer">
										React
									</a>
									and
									<a href="https://vuejs.org/" target="_blank" rel="noreferrer">
										Vue
									</a>
									), design systems and
									<a href="https://derivative.ca/" target="_blank" rel="noreferrer">
										Touchdesigner
									</a>
									for physical immersive projects. When he is not consulting, Nathan enjoys playing guitar, staying active and producing music and
									visual audio art under the moniker 80% Cacao.
								</p>
								<div className="social-media" style={{ paddingTop: "10px" }}>
									<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/digital-anthro" style={{ paddingRight: "10px" }}>
										LinkedIn
									</a>
									<a target="_blank" rel="noreferrer" href="https://medium.com/@natekeeys" style={{ paddingRight: "10px" }}>
										Medium
									</a>
									<a target="_blank" rel="noreferrer" href="https://github.com/keeysnc" style={{ paddingRight: "0" }}>
										Github
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default about;
