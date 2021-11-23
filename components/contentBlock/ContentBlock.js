import Image from "next/image";
import contentBlockStyles from "./ContentBlock.module.css";

const ContentBlock = ({ image, content }) => {
	return (
		<div className={contentBlockStyles.contentBlock}>
			<div className={contentBlockStyles.contentBlock__item}>
				<p>{content}</p>
			</div>
			<div className={contentBlockStyles.contentBlock__item}>
				<Image alt="me" layout="fill" src={image}></Image>
			</div>
		</div>
	);
};

export default ContentBlock;
