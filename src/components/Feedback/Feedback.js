import React from "react";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Avatar from '../../images/image__feedback--slider.png';

import Slider from "react-slick";

import './Feedback.scss';

function Feedback() {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
	};


	return (
		<section className='feedback'>
			<div className='feedback__wrapper'>
				<h2 className='feedback__tittle fontMontserrat fontBold'>Our Clients Speak</h2>
				<p className='feedback__subtittle'>We have been working with clients around the world</p>
				<Slider className='feedback__slider' {...settings}>
					<div className='description__box'>
						<h3 className='description__tittle fontMontserrat font600'>Efficient Collaborating</h3>
						<p className='description__text'>Had really great experience with myresfeber, service is really good and everything is just awesome. Great recommendations and bookings were available at a discounted price. Awesome! </p>
						<div className='box'>
							<img className='description__user-avatar' src={Avatar} alt='аватар автора'></img>
							<span className='description__user-name'>Jane Cooper</span>
							<span className='description__user-status'>CEO at ABC Corporation</span>
						</div>
					</div>
					<div className='description__box'>
						<h3 className='description__tittle fontMontserrat font600'>Efficient Collaborating</h3>
						<p className='description__text'>Had really great experience with myresfeber, service is really good and everything is just awesome. Great recommendations and bookings were available at a discounted price. Awesome! </p>
						<div className='box'>
							<img className='description__user-avatar' src={Avatar} alt='аватар автора'></img>
							<span className='description__user-name'>Jane Cooper</span>
							<span className='description__user-status'>CEO at ABC Corporation</span>
						</div>
					</div>
					<div className='description__box'>
						<h3 className='description__tittle fontMontserrat font600'>Efficient Collaborating</h3>
						<p className='description__text'>Had really great experience with myresfeber, service is really good and everything is just awesome. Great recommendations and bookings were available at a discounted price. Awesome! </p>
						<div className='box'>
							<img className='description__user-avatar' src={Avatar} alt='аватар автора'></img>
							<span className='description__user-name'>Jane Cooper</span>
							<span className='description__user-status'>CEO at ABC Corporation</span>
						</div>
					</div>
					<div className='description__box'>
						<h3 className='description__tittle fontMontserrat font600'>Efficient Collaborating</h3>
						<p className='description__text'>Had really great experience with myresfeber, service is really good and everything is just awesome. Great recommendations and bookings were available at a discounted price. Awesome! </p>
						<div className='box'>
							<img className='description__user-avatar' src={Avatar} alt='аватар автора'></img>
							<span className='description__user-name'>Jane Cooper</span>
							<span className='description__user-status'>CEO at ABC Corporation</span>
						</div>
					</div>
					<div className='description__box'>
						<h3 className='description__tittle fontMontserrat font600'>Efficient Collaborating</h3>
						<p className='description__text'>Had really great experience with myresfeber, service is really good and everything is just awesome. Great recommendations and bookings were available at a discounted price. Awesome! </p>
						<div className='box'>
							<img className='description__user-avatar' src={Avatar} alt='аватар автора'></img>
							<span className='description__user-name'>Jane Cooper</span>
							<span className='description__user-status'>CEO at ABC Corporation</span>
						</div>
					</div>
					<div className='description__box'>
						<h3 className='description__tittle fontMontserrat font600'>Efficient Collaborating</h3>
						<p className='description__text'>Had really great experience with myresfeber, service is really good and everything is just awesome. Great recommendations and bookings were available at a discounted price. Awesome! </p>
						<div className='box'>
							<img className='description__user-avatar' src={Avatar} alt='аватар автора'></img>
							<span className='description__user-name'>Jane Cooper</span>
							<span className='description__user-status'>CEO at ABC Corporation</span>
						</div>
					</div>
					<div className='description__box'>
						<h3 className='description__tittle fontMontserrat font600'>Efficient Collaborating</h3>
						<p className='description__text'>Had really great experience with myresfeber, service is really good and everything is just awesome. Great recommendations and bookings were available at a discounted price. Awesome! </p>
						<div className='box'>
							<img className='description__user-avatar' src={Avatar} alt='аватар автора'></img>
							<span className='description__user-name'>Jane Cooper</span>
							<span className='description__user-status'>CEO at ABC Corporation</span>
						</div>
					</div>
					<div className='description__box'>
						<h3 className='description__tittle fontMontserrat font600'>Efficient Collaborating</h3>
						<p className='description__text'>Had really great experience with myresfeber, service is really good and everything is just awesome. Great recommendations and bookings were available at a discounted price. Awesome! </p>
						<div className='box'>
							<img className='description__user-avatar' src={Avatar} alt='аватар автора'></img>
							<span className='description__user-name'>Jane Cooper</span>
							<span className='description__user-status'>CEO at ABC Corporation</span>
						</div>
					</div>
					<div className='description__box'>
						<h3 className='description__tittle fontMontserrat font600'>Efficient Collaborating</h3>
						<p className='description__text'>Had really great experience with myresfeber, service is really good and everything is just awesome. Great recommendations and bookings were available at a discounted price. Awesome! </p>
						<div className='box'>
							<img className='description__user-avatar' src={Avatar} alt='аватар автора'></img>
							<span className='description__user-name'>Jane Cooper</span>
							<span className='description__user-status'>CEO at ABC Corporation</span>
						</div>
					</div>
				</Slider>
			</div>
		</section>
	)
}

export default Feedback;
