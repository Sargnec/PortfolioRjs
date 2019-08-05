import React from 'react';
import { Carousel } from 'react-bootstrap';

const Kurslar = () => {
	return (
		<section className="blog section-padding bg-gray" data-scroll-index="5">
			<div className="container">

				<div className="section-head">
					<h3>Kurslar</h3>
				</div>
				<div className="row">
					<div className="card pb-30 pt-30 pl-50 mb-20 col-md-12">
						<div className="item">
							<p>
								React'ı öğrenmek ya da bilgilerini pekiştirmek isteyenler için işinize yarayabilecek kaynakları burada
								derledim. Araların da ücretsiz kurslarında bulunduğu bu kurslardan yararlanabilirsiniz.Dökümanlarada <span className="font-weight-bold">
									<a href="https://tr.reactjs.org/docs/getting-started.html" target="blank"> buradan</a>
								</span> ulaşabilirsiniz.
							</p>
						</div>
					</div>
					<div className="col-md-12 col-sm-6">
						<Carousel >

							<Carousel.Item className="pitem ">

								<img
									className="d-block w-100"
									src="img/blog/1.jpg"
									alt="First slide"
								/>

								<Carousel.Caption className="content text-white bg-dark">
									<h6 className="tag">
										<a href="#0">Udemy Kursu</a>
									</h6>
									<h4>
										<a href="#0">React JS Redux - A'dan Z'ye Tüm Yönleriyle</a>
									</h4>
									<h4>
										<a href="#0">Eğitmen: Burak Alparslan</a>
									</h4>
									<span>
										<a href="https://www.udemy.com/react-kursu/" target="blank">Kursa Git</a>
									</span>
								</Carousel.Caption>
							</Carousel.Item>

							<Carousel.Item className="pitem">

								<img
									className="d-block w-100"
									src="img/blog/2.jpg"
									alt="Second slide"
								/>

								<Carousel.Caption className="content text-white bg-dark">
									<h6 className="tag">
										<a href="#0">Codeacademy</a>
									</h6>
									<h4>
										<a href="#0">Bu ücretsiz kursta JSX'i öğrenecek ve temel prensipleri öğreneceksiniz. 
										Sonra, React Components'ta bir adım daha ileri gideceksiniz.</a>
									</h4>
									<span>
										<a href="https://www.codecademy.com/learn/react-101" target="blank">Kursa Git</a>
									</span>
								</Carousel.Caption>

							</Carousel.Item>

							<Carousel.Item className="pitem ">
								<img
									className="d-block w-100"
									src="img/blog/3.jpg"
									alt="Thirth slide"
								/>

								<Carousel.Caption className="content text-white bg-dark">
									<h6 className="tag">
										<a href="#0">Programming with Mosh</a>
									</h6>
									<h4>
										<a href="#0">Scrimba tarafından yayınlanan ve Bob Ziroll tarafından hazırlanan bu harika kurs. 
										Bu ücretsiz kurs kesinlikle en kapsamlı React kurslarından biri.</a>
									</h4>
									<span>
										<a href="https://scrimba.com/g/glearnreact" target="blank">
											Kursa Git
										</a>
									</span>

								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item className="pitem">

								<img
									className="d-block w-100"
									src="img/blog/4.jpg"
									alt="Fourth slide"
								/>

								<Carousel.Caption className="content text-white bg-dark">
									<h6 className="tag">
										<a href="#0">											
											Programming with Mosh
										</a>
									</h6>
									<h4>
										<a href="#0">Bu video size sağlam bir başlangıç için ihtiyacınız olan tüm bilgileri verecektir. 
										2 saatten fazla süren bu video zengin içeriğe sahip olduğunun kanıtı.</a>
									</h4>
									<span>
										<a href="https://www.youtube.com/watch?v=Ke90Tje7VS0" target="blank">
										Kursa Git
										</a>
									</span>

								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item className="pitem">

								<img
									className="d-block w-100"
									src="img/blog/5.jpg"
									alt="Fifth slide"
								/>

								<Carousel.Caption className="content text-white bg-dark">
									<h6 className="tag">
										<a href="#0">Traversy Media</a>
									</h6>
									<h4>
										<a href="#0">Bu kursta React'ın ne olduğunu ve component, state, prop, JSX, event vb. gibi temelleri öğreneceksiniz. 
										Aslında, sadece öğrenmiyor, aynı zamanda harika bir To-Do uygulaması geliştiriyorsunuz.</a>
									</h4>
									<span><a href="https://www.youtube.com/watch?v=sBws8MSXN7A" target="blank">
										Kursa Git
										</a></span>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item className="pitem">

								<img
									className="d-block w-100"
									src="img/blog/6.jpg"
									alt="Sixth slide"
								/>

								<Carousel.Caption className="content text-white bg-dark">
									<h6 className="tag">
										<a href="#0">freeCodeCamp.org</a>
									</h6>
									<span>
										<a href="https://learn.freecodecamp.org/" target="blank">
										Kursa Git
										</a>
										</span>
								</Carousel.Caption>
							</Carousel.Item>

						</Carousel>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Kurslar;
