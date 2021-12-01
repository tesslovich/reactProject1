import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import sliderFirst from '../../images/image__slider--first.png';
import sliderSecond from '../../images/image__slider--second.png';
import sliderThird from '../../images/image__slider--third.png';
import prevIcon from '../../icons/prev__icon.svg';
import nextIcon from '../../icons/next__icon.svg';
import './Screenshots.scss';


function Screenshots() {
	const nextArrow = (props) => {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, display: "block", background: "green" }}
				onClick={onClick}
			/>
		);
	}
	const prevArrow = (props) => {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, display: "block", background: "green" }}
				onClick={onClick}
			/>
		);
}
const settings = {
	dots: false,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	nextArrow: <nextArrow />,
	prevArrow: <prevArrow />
};




return (
	<section className='screenshots'>
		<div className='screenshots__slider slider fontMontserrat'>
			<h2 className='slider__tittle'>Screenshots</h2>
		</div>
		<Slider className='screenshots__slider fontMontserrat' {...settings}>
			<div><img className='slider__image' src={sliderFirst} alt='картинка с телефоном'></img></div>
			<div><img className='slider__image' src={sliderSecond} alt='картинка с телефоном'></img></div>
			<div><img className='slider__image' src={sliderThird} alt='картинка с телефоном'></img></div>
			<div><img className='slider__image' src={sliderFirst} alt='картинка с телефоном'></img></div>
			<div><img className='slider__image' src={sliderSecond} alt='картинка с телефоном'></img></div>
			<div><img className='slider__image' src={sliderThird} alt='картинка с телефоном'></img></div>
		</Slider>
	</section>
)
}

export default Screenshots;