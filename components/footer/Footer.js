import footerStyles from "./FooterStyles.module.css";

const Footer = () => {
	return (
		<footer className={footerStyles.footer}>
			<div className={footerStyles.footer__container}>
				<div>
					<p>Nate Keeys - Copyright 2023</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
