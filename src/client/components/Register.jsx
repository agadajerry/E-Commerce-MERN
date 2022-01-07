import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function Register() {

    const [fullname,setFullname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [address,setAddress] = useState("")
    const [phoneNumber, setPhone] = useState("");
    const [repeatPassword, setRepeatePassword] = useState("");
    const [alert, setAlert] = useState("");
    const [alertVersion, setAlertVersion] = useState("");
    const [alertVersion2, setAlertVersion2] = useState("");
    const [alert2, setAlert2] = useState("");

    function registerUser(e) {
        e.preventDefault()

        if (password !== repeatPassword) {
            setAlertVersion("danger")
            setAlert("Password not match")
        }

        const userDetails = {
            fullname,
            password,
            address,
            email,
            phoneNumber
            
        }
        if (fullname === "" || address === "" || email === "" || phoneNumber === "") {

            setAlert2("Some of the text fields are empty...");
            setAlertVersion2("danger");

        }

       
            axios
              .post("http://localhost:4000/product/register", userDetails)
                .then((res) => {
                    console.log(res.status)
                    if (res.status === 200) {
                       
                        window.location ="/login"
                    } else {
                        setAlert2("Error has occured.Email might be taken Check your entry...");
                        setAlertVersion2("danger");
                  }
              })
                .catch((err)=>{
                  setAlert2("Error has occured. Check your entry...");
                  setAlertVersion2("danger");
              })
        
       
    }

    return (
      <>
        <div className="container" style={{ marginTop: "60px" }}>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card">
                <div
                  className="card-body"
                  tyle={{ marginTop: "60px", backgroundColor: "gray" }}
                >
                  <h3
                    className="text-center mb-5 mt-2"
                    style={{
                      color: "teal",
                      fontFamily: "cursive",
                      fontSize: "30px",
                    }}
                  >
                    <h3 className="text-center bg-success text-white p-2 w-50 m-auto">
                      AVIO Ecommerce Store
                    </h3>
                    New Customer User Account
                  </h3>
                  <span className={`alert alert-${alertVersion2}`}>
                    {alert2}
                  </span>
                  <form method="post" onSubmit={registerUser}>
                    <div className="form-outline mb-2">
                      <label className="form-label" for="fullname">
                        Full Name
                      </label>
                      <input
                        type="text"
                        onChange   ={(e) => setFullname(e.target.value)}
                        value={fullname}
                        className="form-control"
                        Full
                        name="fullname"
                      />
                    </div>
                    <div className="form-outline mb-2">
                      <label className="form-label" for="email">
                        Email
                      </label>
                      <input
                        type="email"
                        onChange   ={(e) => setEmail(e.target.value)}
                        value={email}
                        className="form-control"
                        name="email"
                        required
                      />
                    </div>

                    <div className="form-outline mb-2">
                      <label className="form-label" for="phonenumber">
                        Phone
                      </label>
                      <input
                        type="tel"
                        onChange   ={(e) => setPhone(e.target.value)}
                        value={phoneNumber}
                        className="form-control"
                        name="phonenumber"
                      />
                    </div>

                    <div className="form-outline mb-2">
                      <label className="form-label" for="address">
                        Address
                      </label>
                      <textarea
                        className="form-control"
                        cols="3"
                        required
                        onChange   = {(e) => setAddress(e.target.value)}
                        value={address}
                      />
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-2">
                      <label className="form-label" for="password">
                        Password
                      </label>
                      <input
                        type="password"
                        onChange   ={(e) => setPassword(e.target.value)}
                        value={password}
                        className="form-control"
                      />
                    </div>

                    {/* <!--repeat password--> */}
                    <div className="form-outline mb-2">
                      <label className="form-label" for="rep_password">
                        Repeat Password
                      </label>
                      <input
                        type="password"
                        onChange   ={(e) => setRepeatePassword(e.target.value)}
                        className="form-control"
                                            name="rep_password"
                                            value={repeatPassword}
                      />
                      <span className={`alert alert-${alertVersion}`}>
                        {alert}
                      </span>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button
                      type="submit"
                      className="btn btn-success mb-3 btn-lg"
                      style={{ width: "100%" }}
                    >
                      Sign up
                    </button>

                    <div className="row mb-2">
                      <div className="col">
                        {/* <!-- Simple link --> */}
                        <Link to="/login">Already have account?</Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </>
    );
}

export default Register;
