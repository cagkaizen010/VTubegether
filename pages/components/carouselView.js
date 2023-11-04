import {Carousel} from 'react-bootstrap'

function carouselView(props) {
    
    return(
      <div >
        <Carousel slide={false} data-bs-touch="true" interval={null} >
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    background-image= "black"
                    src={props.pic[0]}
                    height="700px"
                    width="100%"
                    alt="First slide"
                    object-fit="cover"
                    overflow="visible"
                />
                <Carousel.Caption>
                  <h3 background="black">{props.name}</h3>
                  <p>{props.desc}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
                <img
                  className="d-block w-100"
                  src={props.pic[1]}
                  alt="Second slide"
                  height="700px"
                />
                <Carousel.Caption>

                  <h3>{props.name}</h3>
                  <p>{props.desc}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className="d-block w-100"
                src={props.pic[2]}
                alt="Third slide"
                height="700px"
              />
              <Carousel.Caption >
                  <h3>{props.name}</h3>
                  <p>{props.desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel> 
      </div>
    )
    }
export default carouselView;

