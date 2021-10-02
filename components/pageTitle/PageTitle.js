import ParagraphText from "../paragraphText/ParagraphText";

const pageTitle = ({ title, textTitle, textDescription }) => {
	return (
		<div>
			<h1>{title}</h1>
			<ParagraphText textTitle="Text Title" textDescription="This is a caption"></ParagraphText>
		</div>
	);
};

export default pageTitle;
