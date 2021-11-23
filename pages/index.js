import ParagraphText from "../components/paragraphText/ParagraphText";
import Logo from "../components/logo/Logo";
import indexStyles from "../styles/Index.module.css";

export default function Home() {
	return (
		<div>
			<div className={indexStyles.home}>
				<Logo className={indexStyles.logo}></Logo>
				<br />
				<ParagraphText textDescription="Digital Anthro is a UI/UX Design & Development Studio. We are a niche studio specialized in Experience Design, Front-End Web Development & Shopify App Development."></ParagraphText>
			</div>
		</div>
	);
}
