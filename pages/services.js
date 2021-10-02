import Head from "next/head";
import PageTitle from "../components/pageTitle/PageTitle";
import ParagraphText from "../components/paragraphText/ParagraphText";

const services = () => {
	return (
		<div id="services">
			<Head>
				<title>Services</title>
			</Head>
			<PageTitle title="Service Page"></PageTitle>
			<div className="services__grid">
				<div className="services__grid--col">
					<div>
						<ParagraphText></ParagraphText>
					</div>
					<div>
						<ParagraphText></ParagraphText>
					</div>
					<div>
						<ParagraphText></ParagraphText>
					</div>
				</div>
				<div className="services__grid--col">
					<div>
						<ParagraphText></ParagraphText>
					</div>
					<div>
						<ParagraphText></ParagraphText>
					</div>
					<div>
						<ParagraphText></ParagraphText>
					</div>
				</div>
			</div>
		</div>
	);
};

export default services;
