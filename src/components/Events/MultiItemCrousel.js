import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { data, multiData } from "./data";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import axios from '../../services/apiService';

// utility functions
function formatDateTime(dateTimeString) {
  const myDateTime = new Date(dateTimeString);
  const formattedDateTime = myDateTime.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'UTC'
  }).replace(/(\d+)\/(\d+)\/(\d+)/, "$2-$1-$3"); // replace slashes with hyphens
  return formattedDateTime;
}



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
  // appendDots: (dots) => (
  //   <div style={{ backgroundColor: 'transparent' }}>
  //     <ul style={{ margin: "0px", color: "#DA9532" }}> {dots} </ul>
  //   </div>
  // ),
  swipeToSlide: true,
  // slidesToScroll={3}
  initialSlide: 0,
  centerMode:true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        infinite:true,
        centerMode: false,
      },
    },  {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        infinite:true,
        centerMode: false,
      },
    },  {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite:false,
        centerMode: false,
      },
    },  {
      breakpoint: 1900,
      settings: {
        slidesToShow: 4,
        infinite:false,
        centerMode: false,
      },
    },
     
    
    
  ],
};
const MultiItemCarousel2 = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [events, setEvents] = useState([]);
   
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events/');
        console.log(response);
        const filter = response.data.filter(item=>item.is_event_complete!==true)
        setEvents(filter);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div style={{ margin: "20px" }} className="carousel">
      <div className="headings">
        <div className="h2">Events</div>
        <div className="h3">
         
        </div>
      </div>
      <Slider {...carouselProperties}>
        {events.map((item) => (
          <Card  style={{
            width: "90%", 
            height: "340px",
            marginBottom: "10px",
            
          }}  item={item} />
        ))}
      </Slider>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div style={{ width:"100%" , textAlign: "center", padding: "0px", margin: "0 auto"   }}>
    <NavLink  to={`/event/${item.id}/details`}>
    <div className="eve"  >
        <img
          className="multi__image001"
          src={item.event_image}
          alt=""
          style={{
            width: "100%",
            height: "340px",
            marginBottom: "10px",
          }}
        /> 
        <div className="cardd">
          <h3 style={{textAlign:'left',marginLeft:"15px",paddingTop:"5px",fontSize:'18px',marginBottom:'0px'}}>
            {item.event_name
          }</h3>
          <div className="c2" style={{paddingTop:'0px'}} >
            <div className="r1">
              <GoLocation style={{ color: "orange" }} /> 
             <div>   {item.location}</div>
            </div>
            <div className="r2">
              <AiOutlineClockCircle size={13} style={{ color: "orange" }} />
             <div> {formatDateTime(item.start)} </div>
            </div>
          </div>
          <div className="name">  {item.name} </div>
          <div className="join">
            <div>Book now</div> <BsArrowRight size={16}/> </div>

          </div>
      </div></NavLink>
    </div>
  );
};

export default MultiItemCarousel2;
