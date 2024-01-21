import Carousel from 'react-bootstrap/Carousel';

export const Inicio = () => {
    return( 
        <>

<Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="sushi1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Tenemos los mejores Sushis de Santiago</h5>
          <p>Nuestro emprendimiento nació del amor que tenemos hacia la cultura Japonesa</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="sushi2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Los mejores precios de Santiago</h5>
          <p>Sabemos que no todos tenemos los recursos para comprar siempre sushi, pero nuestros productos son accesibles para todo público.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="sushi3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>El lugar más lindo de Santiago</h5>
          <p>
            Además tenemos nuestra sede en Ahumada, ven y comparte con nosotros.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </>
    )
  }