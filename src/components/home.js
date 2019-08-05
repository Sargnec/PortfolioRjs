import React from 'react';

const Anasayfa = () => {
	return (
		<section id="home" className="header" data-scroll-index="0" style={{ backgroundImage: 'url(img/bg.jpg)' }} data-stellar-background-ratio="0.8">

			<div className="v-middle">
				<div className="container">
					<div className="caption">
						<h1 className="display-1">
							Necmettin Sargın <br />
							<small className="display-4 text-muted">Junior Web Developer</small>
						</h1>
						<div className="social-icon">
							<a href="https://www.facebook.com/nsargin1" target="blank">
								<span><i className="fab fa-facebook-f" aria-hidden="true"></i></span>
							</a>
							<a href="https://twitter.com/Necosargin" target="blank">
								<span><i className="fab fa-twitter" aria-hidden="true"></i></span>
							</a>
							<a href="https://www.linkedin.com/in/necmettin-sargın-5787aba9" target="blank">
								<span><i className="fab fa-linkedin-in" aria-hidden="true"></i></span>
							</a>
							<a href="https://github.com/Sargnec" target="blank">
								<span><i className="fab fa-github" /></span>
							</a>
							<a href="https://www.instagram.com/necosargin/" target="blank">
								<span><i className="fab fa-instagram fa-lg" /></span>	
							</a>
						</div>
					</div>


				</div>
			</div>

		</section>
	)
}
export default Anasayfa;