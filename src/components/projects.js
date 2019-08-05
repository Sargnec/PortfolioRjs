import React, { Component } from 'react';

class Projeler extends Component {

	render() {
		return (
			<section className="portfolio section-padding pb-70" data-scroll-index="3">

				<div className="container">

					<div className="section-head">
						<h3>Projeler</h3>
					</div>
					<div className="gallery text-center">
						<div className="row d-flex justify-content-center">
							<div className="col-md-6 col-sm-4 items graphic">
								<div className="item-img">
									<img src="img/portfolio/1.jpg" alt="1" />
									<div className="item-img-overlay">
										<div className="overlay-info v-middle text-center">
											<h5>Şu anki portfolio sitem</h5>
											<div className="icons">
												<span className="icon link">
													<a href="/" className="cgreen btn btn-lg text-white" >
														Siteye git
													</a>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-6 col-sm-6 items graphic ">
								<div className="item-img">
									<img src="img/portfolio/3.jpg" alt="3" />
									<div className="item-img-overlay">
										<div className="overlay-info v-middle text-center">
											<h5>Portfolio denemesi</h5>
											<div className="icons">
												<span className="icon link">
													<a href="https://sargnec.github.io/Portfolio/" target="blank" className="cgreen btn btn-lg text-white">
														Siteye Git
													</a>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-6 items web">
								<div className="item-img">
									<img src="img/portfolio/2.jpg" alt="2" />
									<div className="item-img-overlay">
										<div className="overlay-info v-middle text-center">
											<h5>Basit bir portfolio denemesi</h5>
											<div className="icons">
												<span className="icon link">
													<a href="https://sargnec.github.io/deneme/" className="cgreen btn btn-lg text-white" target="blank">
														Siteye Git
													</a>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}

}
export default Projeler;