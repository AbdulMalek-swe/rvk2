import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel1.css";
import { Link, NavLink } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import { data, multiData } from "./data";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../services/apiService";


let slidesToShow = 5;
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick, currentSlide } = props;

  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <ArrowBackIos style={{ color: "black", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  console.log(props);
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <ArrowForwardIos style={{ color: "black", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: false,

  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        infinite: false,
      },
    },


  ],
};

const MultiItemCarousel1 = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);


  let [menu, setMenu] = useState([]);
  useEffect(() => {
    axios.get('/api/initiative/')
      .then(res => {
        console.log(res.data);
        setMenu(res.data)
      })
  }, [])
  return (
    <div className="carousel">
      <div className="bg01">

        <div className="head">Initiatives</div>
        <Slider {...carouselProperties}>
          {menu.map((curElem) => {
            const { id, img, title, place, redirect } = curElem;

            return (
             <div style={{ width: "100%", margin: "0 auto",  }} >
               <div >
                <div><Link to='/pep' onClick={() => window.scrollTo(0, 0)}>
                  <div className="cont">
                    <img className="multi__image" src={img} alt="loading..." style={{
                      width: "100%",
                      height: "340px"
                    }} />
                    <div className="mtext">{title}</div>

                  </div>
                </Link>
                </div>
                <div className="colorbreak"></div>
              </div>
             </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default MultiItemCarousel1;
