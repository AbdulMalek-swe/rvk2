import React, {useContext, useEffect,  useState} from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import axios from '../../services/apiService';


const EditProfile = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [active_user, setActiveUser] = useState({})



  const [selectedFile, setSelectedFile] = useState(null);

  const [state, setState] = useState({});

  const handleChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/accounts/'+user.id+"/");
        setActiveUser(response.data);

        const initialState = {
          name:response.data.name,
          age:response.data.age,
          dob:response.data.dob,
          email:response.data.email,
          phone_number:response.data.phone_number,
          address:response.data.address,
          gender:response.data.gender
        }
    
        setState(initialState);

      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();

  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  }


  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData()

    data.append("name", state.name)
    data.append("age", state.age)
    data.append("dob", state.dob)
    data.append("email", state.email)
    data.append("phone_number", state.phone_number)
    data.append("address", state.address)
    data.append("gender", state.gender)

    if (selectedFile){
      data.append("profile_picture", selectedFile)
    }
 

    // Submit form data to server
     axios.patch('/api/accounts/'+user.id+"/", data)
    .then((response) => {
      alert("You have successfully updated your account")
    })
    .catch((error) => {
     alert(error)
    });
  }


  return (
    <div className="newss313">
      <div className="backcont">
        <form >
          <div className="donationhead01">
            Update Information
            <br />
          </div>
          <div className="thin-line01"></div>

          <section className="main-card--cointainer-bottom91131">
            <div className="card-container-last91131">
              <div className="card-last91131 ">
                <div className="card-body-last91131">
                  <div className="details31">
                    <div className="data31">Name</div>
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                        className="datainp"
                        placeholder="Enter Name"
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
                    <div className="data31"> Age</div>
                    <div>
                      <input
                        type="number"
                        name="age"
                        value={state.age}
                        onChange={handleChange}
                        className="datainp"
                        placeholder="Enter Your Age"
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
                    <div className="data31"> DOB</div>
                    <div>
                      <input
                        type="date"
                        name="dob"
                        onChange={handleChange}
                        className="datainp"
                        placeholder="DD/MM/YYYY"
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
                    <div className="data31"> Email</div>
                    <div>
                      <input
                        type="text"
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                        placeholder="Enter Email here"
                        className="datainp"
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
                    <div className="data31"> Phone Number</div>
                    <div>
                      <input
                        type="number"
                        name="phone_number"
                        value={state.phone_number}
                        onChange={handleChange}
                        placeholder="Enter Phone number"
                        className="datainp"
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
                        name="address"
                        value={state.address}
                        onChange={handleChange}
                        placeholder="Enter address"
                        className="datainp"
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
                    <div className="data31"> Gender</div>
                    <div>
                    <div className="datainp">
                    <select
                      className="dropdownselect"
                      name="gender"
                      value={state.gender}
                      onChange={handleChange}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
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
                    <div className="data31"> Profile Photo</div>
                    <div>
                      <input
                        type="file"
                        name="age"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="datainp"
                        placeholder="Enter Your Age"
                      />{" "}
                      <div className="thin-line02"></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>

          <div className="lastbutton678">

                <button className="lastbutton01" onClick={handleSubmit}>

                  <p>Update</p>
                </button>
              </div>

        </form>
      </div>
    </div>
  );
};

export default EditProfile;
