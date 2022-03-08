const ParagraphText = ({ textTitle, textDescription, link }) => {
	return (
		<>
			<h2>{textTitle ? textTitle : ""}</h2>
			<p>{textDescription}</p>
			{link ? (
				<a style={{ textDecoration: "underline" }} href={link} rel="noreferrer" target="_blank">
					Learn More
				</a>
			) : null}
		</>
	);
};

export default ParagraphText;
