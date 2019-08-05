import React, { Component } from 'react';
import { Link, Element, Events, animateScroll as scroll, scroller } from 'react-scroll'
import Anasayfa from './home';
import Servisler from './services';
import Kurslar from './blog';
import Projeler from './projects';
import Hakkimda from './about';
import Iletisim from './contact';
import Dropdown from './dropdown';

class OnePage extends Component {
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
	render() {
		return (
			<div>
				
				<nav className=" navbar-default navbar navbar-expand-lg " >
					<div className="container">
						<div className='container' style={{ color: 'white' }}>
							<a className="logo" href="/">Necmettin Sargın</a>
							
							<Dropdown />
							
						</div>
						
						<div className="collapse navbar-collapse" id="navbarNav">

							<ul className="navbar-nav ">
								
								<li >
									<Link activeclass="active"  to="Hakkımda" spy={true} smooth={true} duration={500} >Hakkımda</Link>
								</li>
								<li >
									<Link activeclass="active"  to="Servisler" spy={true} smooth={true} duration={500} >Servisler</Link>
								</li>
								<li >
									<Link activeclass="active"  to="Projeler" spy={true} smooth={true} duration={500} >Projeler</Link>
								</li>
								<li >
									<Link activeclass="active"  to="Kurslar" spy={true} smooth={true} duration={500} >Kurslar</Link>
								</li>
								<li >
									<Link activeclass="active"  to="İletişim" spy={true} smooth={true} duration={500} >İletişim</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<Element name="Anasayfa" className="element">
					<Anasayfa />
				</Element>
				<Element name="Hakkımda" className="element">
					<Hakkimda />
				</Element>
				<Element name="Servisler" className="element">
					<Servisler />
				</Element>
				<Element name="Projeler" className="element">
					<Projeler />
				</Element>
				<Element name="Kurslar" className="element">
					<Kurslar />
				</Element>
				<Element name="İletişim" className="element">
					<Iletisim />
				</Element>
			</div>
		)
	}

}

export default OnePage;

/*  */