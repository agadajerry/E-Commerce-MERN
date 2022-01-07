import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import SideBar from "./SideBar";
import EcommerceContext from "../../context/EcommerceContext";

function UpdateProduct() {
  const { editUpdateProduct, updateProductInfo } = useContext(EcommerceContext);

  const [product_name, setProduct_name] = useState("");
  const [product_size, setProduct_size] = useState("");
  const [product_qtty, setProduct_qtty] = useState("");
  const [product_category, setProduct_category] = useState("");
  const [description, setDescription] = useState("");
  const [product_price, setProduct_price] = useState("");
  const [product_photo_url, setProduct_photo_url] = useState("");
  const [alert, setAlert] = useState("");
  const [alertVersion, setAlertVersion] = useState("");

  //navigate to dashboard after update is sucessful
  const navigate = useNavigate();
  // use effect set back the product info to input fields on button click

  useEffect(() => {
    if (editUpdateProduct.edit === true) {
      setProduct_name(editUpdateProduct.products.product_name);
      setProduct_size(editUpdateProduct.products.product_size);
      setProduct_qtty(editUpdateProduct.products.product_qtty);
      setDescription(editUpdateProduct.products.description);
      setProduct_price(editUpdateProduct.products.product_price);
      setProduct_category(editUpdateProduct.products.product_category);
      setProduct_photo_url(editUpdateProduct.products.product_photo_url);
    }
  }, [editUpdateProduct]);

  //handle form input

  function updateProduct(e) {
    e.preventDefault();

    const productDetails = {
      product_name,
      product_photo_url,
      product_size,
      product_qtty,
      description,
      product_price,
      product_category,
    };
    if (editUpdateProduct.edit === true) {
      axios
        .put(
          `http://localhost:4000/product/${editUpdateProduct.products._id}`,
          productDetails
        )
        .then((res) => alert(res.data.product_name + " updated.."))
        .catch((err) => console.error(err));

      updateProductInfo(editUpdateProduct.products._id, productDetails);

      setAlert("Product Updated successfully...");
      setAlertVersion("success");
      navigate("/");
    }
  }

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
        {/* <!-- End of nav --> */}

        <div className="container mt-5">
          <div className="container mb-4">
            <h1 className="text-center">Update Product</h1>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <div className={`alert alert-${alertVersion}`}> {alert}</div>
                  <form method="put" onSubmit={updateProduct}>
                    <div className="form-group row">
                      <div className="col mb-4">
                        <input
                          type="text"
                          className="form-control"
                          name="product_name"
                          id="product_name"
                          placeholder="product name"
                          onChange={(e) => setProduct_name(e.target.value)}
                          value={product_name}
                        />{" "}
                      </div>

                      <div className="col mb-4">
                        <input
                          type="number"
                          className="form-control"
                          name="product_qtty"
                          id="product_qtty"
                          placeholder="Quantity"
                          onChange={(e) => setProduct_qtty(e.target.value)}
                          value={product_qtty}
                        />
                      </div>
                      <div className="col mb-4">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="price"
                          name="product_price"
                          id="product_price"
                          onChange={(e) => setProduct_price(e.target.value)}
                          value={product_price}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col mb-4">
                        <input
                          type="text"
                          className="form-control"
                          name="product_size"
                          placeholder="Size"
                          id="product_size"
                          onChange={(e) => setProduct_size(e.target.value)}
                          value={product_size}
                        />
                      </div>
                      <div className="col mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Photo Url"
                          name="product_photo_url"
                          id="product_photo_url"
                          onChange={(e) => setProduct_photo_url(e.target.value)}
                          value={product_photo_url}
                        />
                      </div>
                    </div>
                    {/* <!-- Brand and category --> */}
                    <div className="form-group row">
                      <div className="col mb-4">
                        <textarea
                          className="form-control"
                          cols="4"
                          placeholder="Description"
                          name="description"
                          id="description"
                          onChange={(e) => setDescription(e.target.value)}
                          value={description}
                        ></textarea>
                      </div>
                      <div className="col mb-4">
                        <select
                          className="form-select"
                          aria-label="Select Category"
                          onChange={(e) => setProduct_category(e.target.value)}
                        >
                          <option value="Select Category">
                            Select Category
                          </option>
                          <option value="MenWears">MenWears</option>
                          <option value="WomenWears">WomenWears</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col mb-4"></div>
                      <div className="col mb-4">
                        <button
                          type="submit"
                          className="btn btn-success mt-5"
                          style={{ width: "100%" }}
                        >
                          Update Product
                        </button>
                      </div>
                      <div className="col mb-4"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProduct;
