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
									Nathan Keeys is a web developer, designer, music artist and the founder of Digital Anthro with 8+ years experience working with a
									variety of brands and companies. He has designed and developed websites and applications for notable brands and organizations such
									as Accenture, National Children&apos;s Hospital, FBI, Mednovate Connect, Clinical Pharmacy Associates and Centers for Medicare &
									Medicaid Services. In 2018, Nathan started Digital Anthro as an independent consultancy helping businesses plan, design & develop
									web applications with a focus on user experience. <br />
									<br />
									As a consultant, Nathan specializes in designing design systems, building websites and applications with <b>React</b> and{" "}
									<b>Node.js</b> and other javascript technologies. When he is not consulting, Nathan enjoys traveling, staying active and learning
									new things.
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
