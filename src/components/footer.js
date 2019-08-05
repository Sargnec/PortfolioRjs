import React, { Component } from 'react';
import { Link } from 'react-scroll';


class Footer extends Component {
	
	render() {
		return (
			<footer className="page-footer font-small indigo" style={{ color: "white" }}>


				<div className="container">


					<div className="row text-center d-flex justify-content-center pt-5 mb-3">
						<div className="col-md-2 mb-3">
							<h6 className="nav-item pointer">
								<Link activeclass="active" className="nav-link" to="Anasayfa" spy={true} smooth={true} duration={500} >Anasayfa</Link>
							</h6>
						</div>



						<div className="col-md-2 mb-3">
							<h6 className="nav-item pointer">
								<Link activeclass="active" className="nav-link" to="Hakkımda" spy={true} smooth={true} duration={500} >Hakkımda</Link>
							</h6>
						</div>



						<div className="col-md-2 mb-3">
							<h6 className="nav-item pointer">
								<Link activeclass="active" className="nav-link" to="Servisler" spy={true} smooth={true} duration={500} >Servisler</Link>
							</h6>
						</div>


						<div className="col-md-2 mb-3">
							<h6 className="nav-item pointer">
								<Link activeclass="active" className="nav-link" to="Projeler" spy={true} smooth={true} duration={500} >Projeler</Link>
							</h6>
						</div>



						<div className="col-md-2 mb-3">
							<h6 className="nav-item pointer">
								<Link activeclass="active" className="nav-link" to="Kurslar" spy={true} smooth={true} duration={500} >Kurslar</Link>
							</h6>
						</div>


					</div>

					<div className="row text-center d-flex justify-content-center pt-5 mb-3">


						<div className="col-md-12">

							<div className="mb-5 flexCenter">

								<a href="https://www.facebook.com/nsargin1" target="blank">
									<i className="fab fa-facebook-f fa-lg  mr-4" />
								</a>

								<a href="https://twitter.com/Necosargin" target="blank">
									<i className="fab fa-twitter fa-lg  mr-4" />
								</a>

								<a href="https://www.linkedin.com/in/necmettin-sargın-5787aba9" target="blank">
									<i className="fab fa-linkedin-in fa-lg  mr-4" />
								</a>

								<a href="https://github.com/Sargnec" target="blank">
								<i className="fab fa-github mr-4"/>
								</a>

								<a href="https://www.instagram.com/necosargin/" target="blank">
									<i className="fab fa-instagram fa-lg mr-4" />
								</a>

							</div>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}
export default Footer;

/*
constructor(props) {
		super(props);
		this.scrollToTop = this.scrollToTop.bind(this);
	}

	componentDidMount() {

		Events.scrollEvent.register('begin', function () {
			console.log("begin", arguments);
		});

		Events.scrollEvent.register('end', function () {
			console.log("end", arguments);
		});

	}
	scrollToTop() {
		scroll.scrollToTop();
	}
	scrollTo() {
		scroller.scrollTo('scroll-to-element', {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart'
		})
	}
	scrollToWithContainer() {

		let goToContainer = new Promise((resolve, reject) => {

			Events.scrollEvent.register('end', () => {
				resolve();
				Events.scrollEvent.remove('end');
			});

			scroller.scrollTo('scroll-container', {
				duration: 800,
				delay: 0,
				smooth: 'easeInOutQuart'
			});

		});

		goToContainer.then(() =>
			scroller.scrollTo('scroll-container-second-element', {
				duration: 800,
				delay: 0,
				smooth: 'easeInOutQuart',
				containerId: 'scroll-container'
			}));
	}
	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}


 */