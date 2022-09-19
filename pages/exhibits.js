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
						<h2>Projects:</h2>
						<hr></hr>
						<p>
							<a href="https://noisegen.io/">noisegen.io - Interactive Perlin Noise Art Generator</a>
						</p>
						<hr></hr>
						<p>
							<a href="https://cicamuseum.com/over-the-structures-2021/">
								Noise Shift - CICA Museum - South Korea- Over the Structures Exhibition 2021
							</a>
						</p>
						<hr></hr>
						<p>
							<a href="https://thelumaproject.com/#/">thelumaproject.com - An audio visual player for self produced instrumental album</a>
						</p>
						<hr></hr>
					</div>
					<br />
					<div>
						<h2>Awards:</h2>
						<hr></hr>
						<p>
							<a href="https://www.awwwards.com/sites/noisegen-io">Awwwards - Honorable Mention - noisegen.io</a>
						</p>
						<hr></hr>
						<p>
							<a href="https://www.awwwards.com/sites/noisegen-io">Awwwards - Mobile Excellence - noisegen.io</a>
						</p>
						<hr></hr>
					</div>
				</div>
			</div>
		</div>
	);
};

export default services;
