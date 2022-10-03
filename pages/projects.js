import Head from "next/head";
import indexStyles from "../styles/Index.module.css";

const services = () => {
	return (
		<div className={indexStyles.home}>
			<div className={indexStyles.home__content}>
				<Head>
					<title>Services</title>
				</Head>
				<div className={indexStyles.service__info}>
					<div>
						<h2>Projects</h2>
						<hr></hr>
						<p>
							<a target="_blank" rel="noreferrer" href="https://80percentmusic.com">
								80% Cacao Music - Music Production & Songwriting
							</a>
						</p>
						<hr></hr>
						<p>
							<a target="_blank" rel="noreferrer" href="https://noisegen.io/">
								noisegen.io - Interactive Perlin Noise Art Generator
							</a>
						</p>
						<hr></hr>
						<p>
							<a target="_blank" rel="noreferrer" href="https://thelumaproject.com/#/">
								thelumaproject.com - An audio visual player for self produced instrumental album
							</a>
						</p>
						<hr></hr>
					</div>
					<br />
					<div>
						<h2>Awards</h2>
						<hr></hr>
						<p>
							<a target="_blank" rel="noreferrer" href="https://www.awwwards.com/sites/noisegen-io">
								Awwwards - Honorable Mention - noisegen.io
							</a>
						</p>
						<hr></hr>
						<p>
							<a target="_blank" rel="noreferrer" href="https://www.awwwards.com/sites/noisegen-io">
								Awwwards - Mobile Excellence - noisegen.io
							</a>
						</p>
						<hr></hr>
					</div>
				</div>
			</div>
		</div>
	);
};

export default services;
