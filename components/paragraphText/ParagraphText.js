const ParagraphText = ({ textTitle, textDescription, link }) => {
	return (
		<>
			<h3>{textTitle ? textTitle : ""}</h3>
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
