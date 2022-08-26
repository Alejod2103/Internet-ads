import React from 'react'
import img from '../../images/internet.jpg';

const Home = () => {
  return (
    <>
      <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <h6>Rapido y Eficaz</h6>
                <h2>INTERNET DE <em>ALTA VELOCIDAD</em> CON<span> FIBRA OPTICA</span></h2>
                <p>La mejor velocidad y eficiencia de fibra optica para brindarle el servicio que merece.</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src={img} alt="team meeting" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Home