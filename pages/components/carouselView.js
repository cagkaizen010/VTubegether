import {Carousel} from 'react-bootstrap'

const carouselView = ({
    name,
    id,
    desc,
    pic,
}) => {


    return (
        <Carousel slide={false} data-bs-touch="true" interval={null} >
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={pic[0]}
                    alt="First slide"
                    height="700px"
                    object-fit="cover"
                    overflow="visible"
                />
                <Carousel.Caption>
                  <h3>{name}</h3>
                  <p>{desc}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
                <img
                  className="d-block w-100"
                  src={pic[1]}
                  alt="Second slide"
                  height="700px"
                />
                <Carousel.Caption>

                  <h3>{name}</h3>
                  <p>{desc}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className="d-block w-100"
                src={pic[2]}
                alt="Third slide"
                height="700px"
              />
              <Carousel.Caption >
                  <h3>{name}</h3>
                  <p>{desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel> 

    );
};

export default carouselView;