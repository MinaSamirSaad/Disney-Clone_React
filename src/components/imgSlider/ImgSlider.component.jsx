import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Carousel,Wrap } from './ImgSlider.styles';
import badging from "../../assets/images/slider-badging.jpg"
import scale from "../../assets/images/slider-scale.jpg"
import badag from "../../assets/images/slider-badag.jpg"
import scales from "../../assets/images/slider-scales.jpg"


const ImgSlider = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay:true,

      };
    return(
        <>
            <Carousel {...settings}>
            <Wrap>
        <a href="#">
          <img src={badging} alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a href="#">
          <img src={scale} alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a href="#">
          <img src={badag} alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a href="#">
          <img src={scales} alt="" />
        </a>
      </Wrap>
            </Carousel>
        </>
    )
}
export default ImgSlider