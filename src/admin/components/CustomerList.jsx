import { Link } from "react-router-dom"
import SideBar from "./SideBar"


function CustomerList() {
  return (
      <>
<SideBar />
 <div id="content" className=" page-content">
      <div className="custom-menu">
        <button
          type="button"
          id="sidebarCollapse"
          className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"
        >
          <i className="fa fa-bars"></i>
        </button>
      </div>
      <nav className="navbar navbar-light" style={{backgroundColor: "#2ccaca"}}>
        <div className="container-fluid d-flex">
          <p className="navbar-brand"><i className="fa fa-user fa-4x"></i> <small>Admin</small></p>
          <Link to ="/" className="nav-link text-dark">
            <i className="fas fa-sync"></i> &nbsp;Logout</Link>
        </div>
      </nav>
  {/* <!-- End of nav --> */}
<div className="container mt-5 bg-white">
<div className="container mb-4"> <h1 className="text-center">List Of Customers</h1></div>
<table className=" table table-striped mt-5 " id="producttable">
    <thead className="table-success">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Customer's Name</th>
        <th scope="col">Email Address</th>
        <th scope="col">Phone No</th>
        <th scope="col">Home address</th>
        <th scope="col">Billing Address</th>
      </tr>
    </thead>
    <tbody>
   
    </tbody>
  </table>
</div>
      </div>
      </>
    )
}

export default CustomerList
