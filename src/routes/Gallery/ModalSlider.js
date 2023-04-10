import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import { multiData } from './data01';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from 'antd';

const Menu = [
    {
        id: 1,
        image: "../MG/AICTE University-Delhi.jpg",
        name: "AICTE University-Delhi",
    },

    {
        id: 2,
        image: "../MG/AICTE University-New Delhi.jpg",
        name: "AICTE University-New Delhi",
    },
    {
        id: 3,
        image: "../MG/Author Event Japan.png",
        name: "Author Event Japan",
    },
    {
        id: 4,
        image: "../MG/DU SRCC- New Delhi.jpg",
        name: "DU SRCC- New Delhi",
    },
    {
        id: 5,
        image: "../MG/DU-SRCC.jpg",
        name: "DU-SRCC",
    },

    {
        id: 8,
        image: "../MG/IIT-Delhi.jpg",
        name: "IIT-Delhi",
    },
    {
        id: 9,
        image: "../MG/Infosys-Pune.JPG",
        name: "Infosys-Pune",
    },
    {
        id: 10,
        image: "../MG/Yervada Central Jail- Pune.JPG",
        name: "Yervada Central Jail- Pune",
    },
    {
        id: 11,
        image: "../MG/ISB-Hyd.jpg",
        name: "ISB-Hyd.jpg",
    },

    {
        id: 12,
        image: "../MG/MNIT Jaipur.jpg",
        name: "MNIT Jaipur",
    },
    {
        id: 13,
        image: "../MG/NCUI-Delhi.jpg",
        name: "NCUI-Delhi",
    },
    {
        id: 14,
        image: "../MG/Public Event-New Delhi.jpg",
        name: "Public Event-New Delhi",
    },
    {
        id: 15,
        image: "../MG/Red Cross-Norway.jpg",
        name: "Red Cross-Norway",
    },
    {
        id: 16,
        image: "../MG/Save Trees Infosys- Pune.jpg",
        name: "Save Trees Infosys- Pune",
    },

    {
        id: 17,
        image: "../MG/Times-Group.jpg",
        name: "Times-Group",
    },
];
 
const ModalSlider = (props) => {
     
    const modalStyle = {
        paddingLeft: '0px',
        backgroundColor: 'transparent',
        
      };
    
     
    return (
        <div  >
             <Modal
      visible={props.visible}
      onCancel={props.handleCancel}
      closable={true}
      footer={null}
      style={modalStyle}
      width={800}
      height={600}
      centered={true}
    >

            <div style={{width:"100%"}}>
                <img src={props.value} alt="loading..." style={{width:"100%"}}/>
            </div>
 
            </Modal>
        </div>
    );
};

export default ModalSlider;
