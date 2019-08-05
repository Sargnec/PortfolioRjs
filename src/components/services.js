import React from 'react';

const Servisler = () => {
	return (
		<section className="services section-padding bg-gray text-center pb-70" data-scroll-index="2">
			<div className="container">


				<div className="section-head">
					<h3>Neler Yapıyorum?</h3>
				</div>

				<div className="row">
					<div className="col-md-12">
						<div className="item">
							<p style={{fontSize:"20px"}}>
								Udemy'den Html, Css, Javascript  ve React  kursları alıp sonrasında 
								youtube üzerinden bir çok tutorial izledikten sonra işe koyulmaya başladım. 
								İlk işim bir kaç denemeden sonra bu portfolio sitesini yapmak oldu. Günler ilerledikçe projeler kısmına 
								daha fazla ve daha kaliteli projeler eklemek istiyorum.
							</p>
						</div>
					</div>

					<div className="col-md-6">
						<div className="item">
							<span className="icon"><i className="fa fa-laptop" aria-hidden="true"></i></span>
							<h3>Web Tasarımı</h3>

						</div>
					</div>

					<div className="col-md-6">
						<div className="item">
							<span className="icon"><i className="fa fa-umbrella" aria-hidden="true"></i></span>
							<h3>Web Geliştirme</h3>

						</div>
					</div>

					<div className="col-md-6">
						<div className="item">
							<span className="icon"><i className="far fa-gem" aria-hidden="true"></i></span>
							<h3>Kreatif Dizayn</h3>

						</div>
					</div>

					<div className="col-md-6">
						<div className="item">
							<span className="icon"><i className="fas fa-tv" aria-hidden="true"></i></span>
							<h3>Responsive Tasarım</h3>

						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Servisler;