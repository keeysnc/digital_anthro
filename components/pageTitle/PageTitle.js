import ParagraphText from "../paragraphText/ParagraphText";
import pageTitleStyles from "./PageTitle.module.css";

const pageTitle = ({ title, textTitle, textDescription }) => {
	return (
		<div className={pageTitleStyles.pageTitle}>
			<h1>{title}</h1>
			<ParagraphText textTitle={textTitle} textDescription={textDescription}></ParagraphText>
		</div>
	);
};

export default pageTitle;
