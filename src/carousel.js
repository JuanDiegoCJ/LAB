import Carousel from 'react-bootstrap/Carousel';

const Carrousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
      <img src="https://www.elindependiente.com/wp-content/uploads/2024/01/1-2-990x660.jpg" class="d-block w-100" style={{height: "450px", width: "50%"}} alt="..."/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://www.elindependiente.com/wp-content/uploads/2024/01/4-1-990x660.jpg" class="d-block w-100" style={{height: "450px", width: "50%"}} alt="..."/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://www.elindependiente.com/wp-content/uploads/2024/01/9-990x660.jpg" class="d-block w-100" style={{height: "450px", width: "50%"}} alt="..."/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;