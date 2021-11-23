import ParagraphText from "../components/paragraphText/ParagraphText";
import Logo from "../components/logo/Logo";
import indexStyles from "../styles/Index.module.css";

export default function Home() {
	return (
		<div>
			<div className={indexStyles.home}>
				<Logo className={indexStyles.logo}></Logo>
				<br />
				<ParagraphText textDescription="Digital Anthro focuses on building websites, web apps and design systems for cultural and commercial clients. The studio’s broad goals are to visualize content through research and creative exploration."></ParagraphText>
			</div>
		</div>
	);
}
