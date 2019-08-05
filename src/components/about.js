import React from 'react';


const Hakkimda = () => {
	return (
		<section className="hero section-padding pb-70" data-scroll-index="1">
			<div className="container">
				<div className="row">


					<div className="col-md-5">
						<div className="hero-img mb-30">
							<img src="img/hero.jpg" alt="" />
						</div>
					</div>


					<div className="col-md-7">
						<div className="content mb-30">
							<h3>Hakkımda</h3>
							<span className="sub-title">Junior Web Developer</span>
							<p>Merhaba ben <b>Necmettin Sargın</b>.  27 Mart 1995'te İzmit'te doğdum. 
							Gölcük'te ilkokulu bitirdikten sonra İzmit'te Muammer Dereli Anadolu Öğretmen Lisesi'nde okudum. 
							Lise bizden sonra Fen Lisesi oldu. Daha sonrasında Kocaeli Üniversitesi Çevre Mühendisliği bölümünden 
							mezun oldum. Bilgisayarlar ile ilgili olmam ve etrafımdan aldığım destek yazılım geliştirme üzerine yönelmeme neden oldu.
							</p>
							
							<div className="skills">
								<div className="item">
									<div className="progress">
										<div className="progress-bar progress-bar-striped progress-bar-animated cgreen" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>HTML</div>
									</div>
								</div>
								<div className="item">
									<div className="progress">
										<div className="progress-bar progress-bar-striped progress-bar-animated cgreen" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>CSS</div>
									</div>
								</div>
								<div className="item">
									<div className="progress">
										<div className="progress-bar progress-bar-striped progress-bar-animated cgreen" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>JAVASCRİPT</div>
									</div>
								</div>
								<div className="item">
									<div className="progress">
										<div className="progress-bar progress-bar-striped progress-bar-animated cgreen" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>REACT</div>
									</div>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hakkimda;