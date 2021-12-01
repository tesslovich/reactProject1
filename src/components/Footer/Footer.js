import './Footer.scss';
import logo from '../../icons/logo.svg';
import appstoreIcon from '../../icons/appstore__icon.svg';
import googlePlayIcon from '../../icons/googleplay__icon.svg';

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__wrapper'>
				<div className='footer__box'>
					<img className='footer__logo' src={logo} alt='logo'></img>
						<ul className='footer__list'>
							<li className='footer__item'>
								<a className='footer__link-nav' href='#'>
									About
								</a>
							</li>
							<li className='footer__item'>
								<a className='footer__link-nav' href='#'>
									How it works
								</a>
							</li>
							<li className='footer__item'>
								<a className='footer__link-nav' href='#'>
									Contact Us
								</a>
							</li>
							<li className='footer__item'>
								<a className='footer__link-nav' href='#'>
									Help
								</a>
							</li>
							<li className='footer__item'>
								<a className='footer__link-nav' href='#'>
									Privacy Policy
								</a>
							</li>
						</ul>
					<p className='footer__copyright'>© 2021 Foodie. All rights reserved</p>
				</div>
				<div className='footer__application'>
					<h3 className='footer__application-tittle fontMedium fontMonrope'>Get the App</h3>
					<a href='#' className='footer__application-link application-link'>
						<img className='application-link__icon-app' src={appstoreIcon} alt='Сылка на магазин Эпл'></img>
					</a>
					<a href='#' className='footer__application-link application-link'>
						<img className='application-link__icon-google' src={googlePlayIcon} alt='Сылка на магазин гугл'></img>
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer;