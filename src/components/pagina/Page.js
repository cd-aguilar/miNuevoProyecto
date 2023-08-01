import React from 'react'
import image3 from '../img/section3-image.png'
import arrowr from '../img/Icon feather-arrow-right-circle.png'
import arrowl from '../img/Icon feather-arrow-left-circle.png'

function Page() {
  return (
    <>
     <section className="home">
          <div className="content">
            <h1 className="titulo">Sed ut perspiciatis unde omnis iste natus</h1>
            <br /><br />
            <p className="frase">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
            <br /><br /><br />
            <a href="#">Read More</a>
          </div>
          <div className="slider-navigation">
            <div className="nav-btn active" />
            <div className="nav-btn" />
            <div className="nav-btn" />
          </div>
        </section>
        <section className="home2">
          <div className="rectangulo">
            <div className="texto">
              <h1 className="titu_">We Help Businesses</h1>
              <h1 className="subtit">Grow and Innovate</h1>
            </div>
            <p className="conten_texto">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
              eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
              sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            </p>
          </div>
        </section>
        <section className="home3">
          <img src={image3} className="fondo_img" />
          <div className="rec">
            <div className="rec_contenido">
              <h1 className="rec_tit">Sed ut perspiciatis</h1>
              <h1 className="rec_sub">Nemo Enim</h1>
              <p className="rec_parr">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium,
                totam rem aperiam.</p>
              <div className="orientacion">
                <img src={arrowl} className="flecha" />
                <img src={arrowr} className="flecha" />
              </div>
            </div>
          </div>
          <div className="trazo" />
        </section>
    
    </>
  )
}

export default Page

