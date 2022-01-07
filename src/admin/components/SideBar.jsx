import { Link } from 'react-router-dom'

function SideBar() {

  
    return (
    <>
 <div className="vertical-nav overflow-auto" id="sidebar">
    <div className="py-4 px-3 mb-2 text-center  card mb-5 " style={{ borderRadius: "20px",backgroundColor:"#2ccaca"}}>
    <h4 style={{ color: "#fff", fontSize: "25px" }}> <i className="fas fa-binoculars fa-2x"></i> E-Commerce</h4>
  </div>
    <ul className="nav flex-column">
    <li className="nav-item">
      <a href="/" className="nav-link text-dark">
        <i className="fa fa-home"></i>&nbsp; &nbsp;Inventory</a>
    </li>
    <li className="nav-item">
      <Link to="/addproduct" className="nav-link text-dark">
        <i className="fas fa-university"></i>&nbsp; &nbsp; Add product</Link>
    </li>
    <li className="nav-item">
      <Link to="/ordersummary" className="nav-link text-dark">
        <i className="fas fa-money-bill-wave"></i>&nbsp; &nbsp;Order Summary</Link>
    </li>
    <li className="nav-item">
      <Link to="/neworder" className="nav-link text-dark">
        <i className="fas fa-archive"></i> &nbsp; &nbsp; New Order</Link>
    </li>
    <li className="nav-item">
      <Link to="/customerslist" className="nav-link text-dark">
        <i className="fa fa-users"></i> &nbsp; &nbsp; Customers</Link>
    </li>
  </ul>
</div> 
</>
    )
}

export default SideBar
