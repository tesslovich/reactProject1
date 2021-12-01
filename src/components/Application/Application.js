import './Application.scss';

function Application() {
	return (
		<section className='application'>
			<div className='application__wrapper'>
				<div className='application__wrapper--phone'>
					<h2 className='application__titel fontMontserrat fontBold'>Awesome App for Your Modern Lifestyle</h2>
					<p className='application__subtitle'>We'll help you make your plans, inform you about the best events happening all around the world, tell you all about the best places to eat in the city and much much more.</p>
					<div className='application__wrapper-link'>
						<a href='#' className='application__app-store__link'>
							<p className='application__app-store'>App Store</p>
						</a>
						<a href='#' className='application__google-play__link'>
							<p className='application__google-play'>Google play</p>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Application;