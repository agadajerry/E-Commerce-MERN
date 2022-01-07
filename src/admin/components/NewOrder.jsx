import { Link } from "react-router-dom"
import SideBar from "./SideBar"


function NewOrder() {
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
<div className="container mb-1"> <h1 className="text-center">Order Summary</h1></div>
<div className="accordion accordion-flush" id="accordionFlushExample">
<div className="accordion-item">
<h2 className="accordion-header" id="flush-headingOne">
  <button className="accordion-button collapsed btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
    CustomerName: Idoko Jerry <br/> ID: 4334AVIO <br/> Amount Paid: $400 
  </button>
</h2>
<div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
  <table className=" table table-striped ">
    <thead className="table-success">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Product Name</th>
        <th scope="col">Size</th>
        <th scope="col">Image</th>
        <th scope="col">Price</th>
        <th scope="col">Category</th>
        <th scope="col">Brand</th>
        <th scope="col">Quantity</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
 </div>
</div>
</div>
</div>
</div>
</>
    )
}

export default NewOrder
