import { Link } from "react-router-dom"
import  {useState} from "react"
import axios from "axios";



function Login() {

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 



  function userLogin(e) {
    e.preventDefault()
    
    if (email !== "" || password !== "") {
      
      axios.post("http://localhost:4000/product/login", {
        email,password
      }).then((res => {
       
        window.localStorage.setItem("isLogin", res.data.isLogin)
        if (res.status === 200) {
          
          window.location = "/allproduct"
        }
      })).catch(err => console.error(err))
      
    }
     
  };
  
    return (
      <>
        {/* <Footer userId ={userId} /> */}
        <div className="container" style={{ marginTop: "100px" }}>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h3
                    className="text-center mb-5 mt-2"
                    style={{
                      color: "teal",
                      fontFamily: "cursive",
                      fontSize: "30px",
                    }}
                  >
                    <p className="text-center bg-success text-white p-2  mb-1 w-50 m-auto">
                      AVIO Ecommerce Store
                    </p>
                   Login To Access Your cart Items
                  </h3>

                  <form method="post" onSubmit ={userLogin}>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="email">
                        Email Name
                      </label>
                      <input
                        type="email"
                        onChange = {(e)=>setEmail(e.target.value)}
                        value ={email}
                        className="form-control"
                        name="email"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor ="password">
                        Password
                      </label>
                      <input
                        type="password"
                        onChange = {(e)=>setPassword(e.target.value)}
                        value= {password}
                        className="form-control"
                        name="password"
                      />
                    </div>

                    <button
                      type="submit"
                      
                      className="btn btn-success m-auto mb-3 btn-lg" style={{width:"100%"}}
                    >
                      Sign in
                    </button>

                    <div className="row mb-4">
                      <div className="col">
                        <Link to ="/register">No account yet?</Link>
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

export default Login
