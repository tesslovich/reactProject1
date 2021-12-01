import './Header.scss';
import logo from '../../icons/logo.svg';

function Header() {
	return (
		<header className='header'>
			<img className='header__logo' src={logo} alt='logo'></img>
			<div className='header__wrapper-nav'>
				<ul className='header__nav main-nav'>
					<li className='main-nav__item'>
						<a className='main-nav__link fontBold' href='#'>
							Home
						</a>
					</li>
					<li className='main-nav__item'>
						<a className='main-nav__link fontBold' href='#'>
							About Us
						</a>
					</li>
					<li className='main-nav__item'>
						<a className='main-nav__link fontBold' href='#'>How It Works
						</a>
					</li>
					<li className='main-nav__item'>
						<a className='main-nav__link fontBold' href='#'>Screenshots
						</a>
					</li>
					<li className='main-nav__item'>
						<a className='main-nav__link fontBold' href='#'>Testimonials
						</a>
					</li>
				</ul>
				<button className='header__login fontBold' type='button'>Login</button>
			</div>
		</header>
	)
}

export default Header;