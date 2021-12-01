import './Aboutus.scss';
import imageAboutusFirst from '../../images/image__aboutus-first.png';
import imageAboutUsSecond from '../../images/Image__aboutus-second.png';
import imageAboutUsThird from '../../images/Image__aboutus-third.png';
import imageAboutUsFourth from '../../images/Image__aboutus-fourth.png';

function Aboutus() {
	return (
		<section className='aboutus'>
			<div className='aboutus__mini-gallery mini-gallery'>
				<ul className='mini-gallery__list'>
					<li className='mini-gallery__item'>
						<a href='#'>
							<img src={imageAboutusFirst} width='250' height='334'></img>
						</a>
					</li>
					<li className='mini-gallery__item'>
						<a href='#'>
							<img src={imageAboutUsSecond} width='270' height='270'></img>
						</a>
					</li>
					<li className='mini-gallery__item'>
						<a href='#'>
							<img src={imageAboutUsThird} width='164' height='285'></img>
						</a>
					</li>
					<li className='mini-gallery__item'>
						<a href='#'>
							<img src={imageAboutUsFourth} width='356' height='356'></img>
						</a>
					</li>
				</ul>
			</div>
			<div className='aboutus__description'>
				<h2 className='aboutus__tittle fontMontserrat'>About us</h2>
				<p className='aboutus__subtittle fontBold'>Myresfeber is a leading city & entertainment guide filled with handpicked recommendations of what to do in your city, explore hidden gems and be the first to get the latest buzz!</p>
				<p className='aboutus__text'>We consist of a constantly growing community of local experts showcasing a range of curated content around events, food, shopping, fashion, sightseeing, local communities, travel and so much more!We'll help you make your weekend plans, inform you about the best events happening all around the world, tell you all about the best places to eat in the city and much much more. Here's a little taste of the plethora of features we offer -You will happily receive expert recommendations tailor-made to suit your interests. We'll be providing you with city-specific stories and videos, handy local information - all right on your smartphone, ready to be scrolled through!We'll be updating and pushing through fresh content every few hours, giving you more than enough time to scan through and make plans to explore your city.You can also like, share and bookmark all your favorite articles and blurbs, and store them ready for future lookups!We pride ourselves on being one of the fastest-loading apps out there today so that you'll have a seamless browsing experience.With all this and more, all fresh and ready for you guys, this is one platform that'll become your lifeline to navigate all corners of your city. Explore away!</p>
			</div>

		</section>
	)
}

export default Aboutus;