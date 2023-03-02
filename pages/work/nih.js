import { getSortedPostsData } from "../../utils/dataParser";
import { getPostData } from "../../utils/markdownToHtml";

const nih = ({ contentData }) => {
	return (
		<div>
			<div dangerouslySetInnerHTML={{ __html: contentData.contentHtml }}></div>
		</div>
	);
};

// runs at build time
export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	const contentData = await getPostData("nih");
	return {
		props: {
			allPostsData,
			contentData,
		},
	};
}

export default nih;
