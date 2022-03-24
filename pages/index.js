import indexStyles from "../styles/Index.module.css";

export default function Home() {
	return (
		<div>
			<div className={indexStyles.home}>
				<div className={indexStyles.home__content}>
					<h1>Digital Anthro</h1>
					<h3>Digital Anthro is a creative studio specialized in immersive web design, development & storytelling</h3>
				</div>
				<br />
				{/* <ParagraphText textDescription="Digital Anthro is a UI/UX Design & Development Studio. We are a niche studio specialized in Experience Design, Front-End Web Development & Shopify App Development."></ParagraphText> */}
			</div>
		</div>
	);
}
