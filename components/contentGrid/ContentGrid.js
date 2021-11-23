import ContentItem from "./ContentItem";

const ContentGrid = () => {
	return (
		<div className="contentGrid">
			<div className="contentGrid__image">
				<ContentItem></ContentItem>
				<ContentItem></ContentItem>
				<ContentItem></ContentItem>
				<ContentItem></ContentItem>
			</div>
		</div>
	);
};

export default ContentGrid;
