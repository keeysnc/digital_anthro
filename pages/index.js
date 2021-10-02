import Head from "next/head";
import Image from "next/image";
import ParagraphText from "../components/paragraphText/ParagraphText";
import Pagination from "../components/pagination/Pagination";
import Logo from "../components/logo/Logo";

export default function Home({ articles }) {
	return (
		<div>
			<Head>
				<title>Web Dev</title>
				<meta name="keywords"></meta>
			</Head>
			<div class="home">
				<Pagination></Pagination>
				<Logo></Logo>
				<ParagraphText></ParagraphText>
			</div>
			{/* use for work section */}

			{/* {articles.map((article) => (
				<h3>{article.title}</h3>
			))} */}
		</div>
	);
}

// getting data before page render

// export const getStaticProps = async () => {
// 	const res = await fetch(`http://jsonplaceholder.typicode.com/posts/?_limit=6`);
// 	const articles = await res.json();
// 	return {
// 		props: {
// 			articles,
// 		},
// 	};
// };
