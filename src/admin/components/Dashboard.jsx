import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useContext, useState, useEffect } from "react";
import EcommerceContext from "../../context/EcommerceContext";
import SideBar from "./SideBar";

function Dashboard() {
  const [searchInput, setSearchInput] = useState("");
  const [searchOutput, setSearchOutput] = useState([]);
  const { setProductForEdit, productList, deleteProduct } =
    useContext(EcommerceContext);

  //use state to listening for input text
  useEffect(() => {
    setSearchOutput([]);
    productList.filter((prdt) =>
      prdt.product_name
        .toString()
        .toLowerCase()
        .includes(searchInput.toLowerCase())
        ? setSearchOutput((searchOutput) => [...searchOutput, prdt])
        : null
    );
  }, [productList, searchInput]);

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
        <nav
          className="navbar navbar-light"
          style={{ backgroundColor: "#2ccaca" }}
        >
          <div className="container-fluid d-flex">
            <p className="navbar-brand">
              <i className="fa fa-user fa-4x"></i> <small>Admin</small>
            </p>
            <Link to="/" className="nav-link text-dark">
              <i className="fas fa-sync"></i> &nbsp;Logout
            </Link>
          </div>
        </nav>

        <div className="container mt-5 bg-white">
          <div className="container mb-5">
            {" "}
            <h1 className="text-center">All Products</h1>
          </div>
          <div className="row">
            <label className="col-sm-1 col-form-label ms-5">
              Search <FaSearch />
            </label>

            <div className="col-md-4">
              <input
                type="text"
                id="search"
                onChange={(e) => setSearchInput(e.target.value)}
                className="form-control"
                placeholder="Search Product"
              />
            </div>
            <div className="col-md-6"></div>
          </div>

          <table className=" table table-striped mt-5  " id="producttable">
            <thead className="table-success">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Size</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {searchOutput.map((product, id = 0) => (
                <tr key={product._id}>
                  <td>{++id}</td>
                  <td>{product.product_name}</td>
                  <td>{product.product_size}</td>
                  <td>
                    <img
                      src={product.product_photo_url}
                      style={{ width: "80px" }}
                      alt="clothes"
                    />
                  </td>
                  <td>{product.product_price}</td>
                  <td>{product.product_category}</td>
                  <td>{product.description}</td>
                  <td>{product.product_qtty}</td>
                  <td className="d-flex justify-content-around p-4">
                    <Link
                      to={`/update/${product._id}`}
                      onClick={() => setProductForEdit(product)}
                      className="btn btn-success me-2"
                    >
                      <i className="fa fa-edit"></i>
                    </Link>
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="btn btn-danger"
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
