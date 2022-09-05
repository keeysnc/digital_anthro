import footerStyles from "./FooterStyles.module.css";

const Footer = () => {
	return (
		<footer className={footerStyles.footer}>
			<div className={footerStyles.footer__container}>
				<div>
					<p>Digital Anthro, LLC - Copyright 2022</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
