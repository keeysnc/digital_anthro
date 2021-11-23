import indexStyles from "../styles/Index.module.css";

export default function Home() {
	return (
		<div>
			<div className={indexStyles.home}>
				<div className={indexStyles.logo}>
					<h1>Digital Anthro</h1>
					<p>An independent user experience studio</p>
				</div>
				<br />
				{/* <ParagraphText textDescription="Digital Anthro is a UI/UX Design & Development Studio. We are a niche studio specialized in Experience Design, Front-End Web Development & Shopify App Development."></ParagraphText> */}
			</div>
		</div>
	);
}
