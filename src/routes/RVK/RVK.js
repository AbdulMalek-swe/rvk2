import "./RVK.css";
 
import { CgMailForward } from 'react-icons/cg';
import React, { useEffect, useState } from "react";
import axios from "../../services/apiService";

const First = () => {
  // window.scrollTo(0,0)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  let [ban, setBan] = useState([])
  useEffect(() => {
    axios.get("/api/rvkaboutbanner/")
      .then(res => {
        setBan(res.data)
      })
  }, [])
 
  // rvk description code is here 
  let [des, setDes] = useState([])
  useEffect(() => {
    axios.get("/api/rkbaboutdescription/")
      .then(res => {
        console.log(res.data);
        setDes(res.data)
      })
  }, [])

  //  quick link code is here 
  let [links, setLinks] = useState([])
  useEffect(() => {
    axios.get("/api/quicklinkview/")
      .then(res => {
        setLinks(res.data)
      })
  }, [])

  // read quiclink read more button 
  const [read,setRead] = useState({
    id:null
   });

  const handleClick = (id) => {
    if(read.id==id){
      setRead({
        id:null
      })
    }
    else{
      setRead({
        id:id
      })
    }
    
  };

  return (
    <div className="maincontmargin456" style={{ paddingTop: "114px" }}>
      <div className="card-container_out456">
        <div className="card_out456 " style={{ }}>
          <div className="card-body456">
            <div>
              <h2 className="card-title_out456">
                 {ban[0]?.title}
                <br />
                <div className="card-description_out456">
                  <br />
                  {ban[0]?.sub_title}
                </div>
              </h2>

            </div>
          </div>
        </div>
      </div>

     {des.map((item,i)=>
     <div>
     <section className="main-card--cointainer456">
     <div className="card-container1456">
       <div className="card1456 ">
         <div className="img1456">
           <p>
             <span>Raj Vidya Kender</span>  
             {item.first_section_description}
             <br />       
           </p>
         </div>
       </div>
     </div>

     <div className="card-container2456">
       <div className="card2456 ">
         <div className="img2456">
           <img src={item.first_section_img} alt="img1456" />
         </div>
       </div>
     </div>

     <div className="card-container3456">
       <div className="card3456 ">
         <div className="img3456">
           <img src={item.second_section_img} alt="img2456" />
         </div>
       </div>
     </div>
     <div className="card-container4456">
       <div className="card4456 ">
         <div className="img4456">
           <p>
             <span>For the people by the people</span>
             {item.second_section_description}
              </p>
         </div>
       </div>
     </div>
    
   </section>
   <div>
        <p className="last456">
          <span>Peace Education Program-From Darkness into Light</span>
          <br />
         {item.thired_section_description}
        </p>
      </div>
   </div>
     )} 
     
    
      <div className="break456"></div>
      <div className="quick456">Quick Links</div>
      <section className="main-card--cointainer11456">
        {
          links.map((item, i) => <div className="card-container11456" key={i}>
            <div className="card11456 ">
              <div className="card-body11456">
                <div className="imageD456">
                  <img src={item.image} alt="img" />
                </div>
                <div className="card-title11456" style={{marginTop:'4px'}}>
                 {
                  (read.id!=item.id) &&  <> {item.description.slice(0,100)}...</>
                 }
                 {
                   (read.id==item.id) && <> {item.description}</>
                 }
                </div>
                <button className="button456" onClick={()=>handleClick(item.id)} > {(read.id==item.id) ? <>Show Less</>:<>Read More</> }<CgMailForward style={{ marginLeft: "7px" }} /></button>
              </div>
            </div>
          </div>)
        }
      </section>
      <div className="break456"></div>

    </div>
  );
};

export default First;
