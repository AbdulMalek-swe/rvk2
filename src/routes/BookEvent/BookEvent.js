import React, {useState, useEffect, useContext} from "react";
import "./BookEvent.css";
import img from "./1.png";
import { Link, useNavigate, NavLink, useParams } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { MdEventNote } from "react-icons/md";
import { GiPublicSpeaker } from "react-icons/gi";
import { useForm } from "react-hook-form";
import axios from '../../services/apiService';
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-hot-toast";
import { Payment } from "@material-ui/icons";
// import Razorpay from 'razorpay';

function formatDjangoDateTime(djangoDatetimeObj) {
  var jsDateObj = new Date(djangoDatetimeObj);

  var options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' };
  var formattedDate = jsDateObj.toLocaleString('en-US', options);

  return formattedDate;
}



const BookEvent = () => {

  const [isDivOpen, setIsDivOpen] = useState(false);
  const [event, setEvent] = useState({});
  console.log(event );
  const { user } = useContext(AuthContext);
  console.log(user);

  const {id} = useParams()

  const handleButtonClick = () => {
    setIsDivOpen(!isDivOpen);
  };
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    
    trigger,
  } = useForm();
 

  // const razorpay = new Razorpay({
  //   key_id: 'YOUR_KEY_ID',
  //   key_secret: 'YOUR_KEY_SECRET',
  // });

  const [amount, setamount] = useState(100);
  const handlePaymentSuccess = async (response) => {
    try {
      console.log(response);
      let bodyData = new FormData();

      // we will send the response we've got from razorpay to the backend to validate the payment
      bodyData.append("response", JSON.stringify(response));

       axios.post('/api/event_register/')
        .then((res) => {
          console.log("Everything is OK!");
           
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(console.error());
    }
  };
 const onSubmit = async ()=> 1 ;
  const payment = async (data) => {
    if(amount === ""){
      alert("please enter amount");
      }else{
        try{
          var options = {
            key: "rzp_test_2y68LXTdn3DKK9",
            key_secret:"GU6RrUGnP2KId7WFSrMULPus",
            amount : parseInt(event.event_price)*100,
            currency:"INR",
            name:"STARTUP_PROJECTS",
            description:"for testing purpose",
            handler: function(response){
              handlePaymentSuccess (response)
            },
            prefill: {
              name:user.name,
              email:user.email,
              contact:"+8801977528702"
            },
            notes:{
              address:"Razorpay Corporate office"
            },
            theme: {
              color:"#3399cc"
            }
          };
          // console.log(options);
          var pay = new window.Razorpay(options);
          console.log(pay);
          pay.open();  
        }
        catch(error){
          console.log(error);
        }
      
      }


  };
  useEffect(() => {
      axios.get('/api/events/')
      .then(res=>{
       let item = res.data.find(item=>item.id==id);
        
       setEvent(item);
      })
  }, []);

  return (
    <div className="newss31">
      <div className="backcont563">
        <div className="detailevent">Event Details </div>
        <div className="donationhead563">
          <section className="main-card--cointainer91170">
            <div className="card-container91170">
              <div className="card91170 ">
                <div className="img91170">
                  <img src={event.event_image} alt="img" />
                   
                </div>
              </div>
            </div>
            <div className="card-container91170">
              <div className="card91170 ">
                <div className="card-body91170">
                  <div className="card-title91170">{event.event_name
}</div>
                </div>
                <div className="img91170">
                  <div className="eventbookdetailrow">
                    <div className="rowevent1">
                      <GiPublicSpeaker />
                    </div>
                    <div className="rowevent2">
                      <div className="rowevent20">
                        <div className="colevent09">
                          Host Organizations
                          <div />
                          <div className="colevent090">{event.host_name}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="eventbookdetailrow">
                    <div className="rowevent1">
                      <ImLocation />
                    </div>
                    <div className="rowevent2">
                      <div className="rowevent20">
                        <div className="colevent09">
                          Location
                          <div />
                          <div className="colevent090">
                            {event.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="eventbookdetailrow">
                    <div className="rowevent1">
                      <MdEventNote />
                    </div>
                    <div className="rowevent2">
                      <div className="rowevent20">
                        <div className="colevent09">
                          Begins
                          <div />
                          <div className="colevent090">
                           {formatDjangoDateTime(event.start)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="eventbookdetailrow">
                    <div className="rowevent1">
                      <MdEventNote />
                    </div>
                    <div className="rowevent2">
                      <div className="rowevent20">
                        <div className="colevent09">
                           Amount
                          <div />
                          <div className="colevent090">
                          { event.event_price
}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="bookeventticket" onClick={handleButtonClick}>Book Now</button>
              </div>
            </div>
          </section>
        </div>
      </div>
      {isDivOpen && (
<div>
<div className="break"></div>
   <div className="backcont">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="donationhead01">
            Personal Information
            <br />
          </div>
          <div className="thin-line01"></div>

          <section className="main-card--cointainer-bottom91131">
            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> First Name</div>
                    <div>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.name && "invalid"
                        } datainp`}
                        {...register("first_name", {
                          required: "First Name is Required",
                        })}
                        onKeyUp={() => {
                          trigger("first_name");
                        }}
                        placeholder="Enter First Name"
                      />{" "}
                      <div className="thin-line02"></div>
                      {errors.name && (
                        <small className="text-danger">
                          {errors.name.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Last Name</div>
                    <div>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.namel && "invalid"
                        } datainp`}
                        {...register("last_name", {
                          required: "Last Name is Required",
                        })}
                        onKeyUp={() => {
                          trigger("last_name");
                        }}
                        placeholder="Enter Last Name"
                      />{" "}
                      <div className="thin-line02"></div>
                      {errors.namel && (
                        <small className="text-danger">
                          {errors.namel.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Email</div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter Email here"
                        className={`form-control ${
                          errors.email && "invalid"
                        } datainp`}
                        {...register("email", {
                          required: "Email is Required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("email");
                        }}
                      />{" "}
                      <div className="thin-line02"></div>
                      {errors.email && (
                        <small className="text-danger">
                          {errors.email.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Phone Number</div>
                    <div>
                      <input
                        type="number"
                        placeholder="Enter Phone number"
                        className={`form-control ${
                          errors.phone && "invalid"
                        } datainp`}
                        {...register("phone_number", {
                          required: "Phone is Required",
                          pattern: {
                            value:
                              /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                            message: "Invalid phone number",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("phone_number");
                        }}
                      />{" "}
                      <div className="thin-line02"></div>
                      {errors.phone && (
                        <small className="text-danger">
                          {errors.phone.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Smart Card Number</div>
                    <div>
                      <input
                        type="text"
                        className="datainp"
                        placeholder="Enter Smat card number"
                       
                        {...register("smart_card_number")}
                      />{" "}
                      <div className="thin-line02"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Address</div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter address"
                        className={`form-control ${
                          errors.address && "invalid"
                        } datainp`}
                        {...register("address", {
                          required: "Address is Required",
                        })}
                        onKeyUp={() => {
                          trigger("address");
                        }}
                      />{" "}
                      <div className="thin-line02"></div>
                      {errors.address && (
                        <small className="text-danger">
                          {errors.address.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Pin Code</div>
                    <div>
                      <input
                        type="number"
                        placeholder="Enter your Pin Code"
                        maxLength={6}
                        className={`form-control ${
                          errors.pin && "invalid"
                        } datainp`}
                        {...register("pin_code", {
                          required: "Pin Code is Required",
                        })}
                        onKeyUp={() => {
                          trigger("pin");
                        }}
                      />
                      <div className="thin-line02"></div>
                      {errors.pin && (
                        <small className="text-danger">
                          {errors.pin.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> City</div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter your city"
                        className={`form-control ${
                          errors.city && "invalid"
                        } datainp`}
                        {...register("city", { required: "City is Required" })}
                        onKeyUp={() => {
                          trigger("city");
                        }}
                      />
                      <div className="thin-line02"></div>
                      {errors.city && (
                        <small className="text-danger">
                          {errors.city.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> State</div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter your state"
                        className={`form-control ${
                          errors.state && "invalid"
                        } datainp`}
                        {...register("state", {
                          required: "State is Required",
                        })}
                        onKeyUp={() => {
                          trigger("state");
                        }}
                      />
                      <div className="thin-line02"></div>
                      {errors.state && (
                        <small className="text-danger">
                          {errors.state.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31"> Country</div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter your country"
                        className={`form-control ${
                          errors.country && "invalid"
                        } datainp`}
                        {...register("country", {
                          required: "Country is Required",
                        })}
                        onKeyUp={() => {
                          trigger("country");
                        }}
                      />
                      <div className="thin-line02"></div>
                      {errors.country && (
                        <small className="text-danger">
                          {errors.country.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="lastbutton678">
            {" "}
            <button className="lastbutton01" type="submit" onClick={payment }>
              <p>Submit</p>
            </button>
          </div>
        </form>
      </div>
      </div>
      )}
    </div>
  );
};

export default BookEvent;
