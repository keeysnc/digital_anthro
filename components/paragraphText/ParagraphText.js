const ParagraphText = ({ textTitle, textDescription }) => {
	return (
		<>
			<h3>{textTitle ? textTitle : ""}</h3>
			<p>{textDescription}</p>
		</>
	);
};

export default ParagraphText;
