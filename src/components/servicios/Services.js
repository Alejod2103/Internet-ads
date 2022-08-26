import React from 'react'

const Services = () => {
  return (
    <>
      <div id="about" class="about-us section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="left-image wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
            <img src="assets/images/about-left-image.png" alt="person graphic" />
          </div>
        </div>
        <div class="col-lg-8 align-self-center">
          <div class="services">
            <div class="row">
              <div class="col-lg-6">
                <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                  <div class="icon">
                    <img src="assets/images/service-icon-01.png" alt="reporting" />
                  </div>
                  <div class="right-text">
                    <h4>Mayor velocidad</h4>
                    <p style={{fontSize: '14px'}}>Descubre la mejor capacidad de conexion con el mejor servicio de fibra en el pais.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                  <div class="icon">
                    <img src="assets/images/service-icon-02.png" alt="" />
                  </div>
                  <div class="right-text">
                    <h4>La cobertura que necesitas</h4>
                    <p style={{fontSize: '13px'}}>Contamos con la mayor red de cobertura de servicio de internet en todos los estados.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                  <div class="icon">
                    <img src="assets/images/service-icon-03.png" alt="" />
                  </div>
                  <div class="right-text">
                    <h4>Seguro y Confiable</h4>
                    <p style={{fontSize: '14px'}}>Internet con seguridad y cifrado, navega tranquilo</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="1.1s">
                  <div class="icon">
                    <img src="assets/images/service-icon-04.png" alt="none" />
                  </div>
                  <div class="right-text">
                    <h4>Servicio Ilimitado</h4>
                    <p style={{fontSize: '14px', width: '100%'}}>Navega, Descarga, Juega y olvidate de los costos extras</p>
                  </div>
                </div>
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

export default Services