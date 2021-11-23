import footerStyles from "./FooterStyles.module.css";

const Footer = () => {
	return (
		<footer className={footerStyles.footer}>
			<div className={footerStyles.footer__container}>
				<div>
					<p>Contact Us @ info@digitalanthro.com</p>
				</div>

				<div>
					<p>Digital Anthro, LLC - Copyright 2021</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
