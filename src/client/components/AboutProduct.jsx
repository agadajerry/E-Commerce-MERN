import { useState, useEffect,useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import EcommerceContext from "../../context/EcommerceContext";
import Navigation from "./Navigation";
import Footer from "./Footer";


function AboutProduct() {
  const { addToCartLocally, getTotalQtty } =
    useContext(EcommerceContext);

  const [getProductById, setGetProductById] = useState([]);
  const [menWear, setMenWear] = useState([]);
  const [newQtty, setNewQtty] = useState(0);
  const [emptyInput, setEmptyInput] = useState("");

  const params = useParams();
  const userId = localStorage.getItem("userId");

  // get specific category

  useEffect(() => {
    getData();

    async function getData() {
      await axios
        .get(`http://localhost:4000/product/${params.id}`)
        .then((res) => setGetProductById(res.data))
        .catch((err) => console.error(err));
    }

    
  }, []);
  
  //  function returnProductDetails() {
  //    const product_from_LocalStorage = localStorage.getItem("products");

  //    console.log(JSON.parse(product_from_LocalStorage + "hjhj"));
  //  }
  //get all related wears

  useEffect(() => {
    getRelated();
  }, []);

  //fetch related product
  async function getRelated() {
    await axios
      .get(`http://localhost:4000/product/category/${params.MenWears}`)
      .then((res) => setMenWear(res.data))
      .catch((err) => console.error(err));
  }

  //add to cart

  // function addItemTocart(prdId) {
  //   if (userId == "" || prdId == "" || newQtty == 0) {
  //     setEmptyInput("Empty field");
  //   } else {
  //     axios
  //       .post("http://localhost:4000/product/addtocart", {
  //         productId: getProductById._id,
  //         userId,
  //         quantity: newQtty,
  //       })
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => console.error(err));
  //   }
  // }





  return (
    <>
      <Navigation getTotalQtty={getTotalQtty} />
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={getProductById.product_photo_url}
                style={{ width: "600px", height: "700px" }}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              {/* <div className="small mb-1">SKU: BST-498</div> */}
              <h1 className="display-5 fw-bolder">
                {getProductById.product_name}
              </h1>
              <div className="fs-5 mb-5">
                {/* <span className="text-decoration-line-through">$45.00</span> */}
                <span>$ {getProductById.product_price}</span>
              </div>
              <p className="lead">{getProductById.description}</p>
              <div className="d-flex">
                <p style={{ color: "red", margin: "5px" }}>{emptyInput}</p>
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                  onClick={() =>
                    addToCartLocally(
                      getProductById._id,
                      getProductById.product_name,
                      getProductById.product_price,
                      getProductById.product_photo_url,
                      1
                    )
                  }
                >
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Related items section--> */}
      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <h2 className="fw-bolder mb-4">Related products</h2>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {menWear.map((prd) => (
              <div className="col mb-5" key={prd._id}>
                <div className="card h-100">
                  {/* <!-- Product image--> */}
                  <a href={`/aboutproduct/${prd._id}/${params.MenWears}`}>
                    {" "}
                    <img
                      className="card-img-top "
                      src={prd.product_photo_url}
                      style={{ height: "300px" }}
                      alt="..."
                    />
                  </a>
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">{prd.product_name}</h5>
                      {/* <!-- Product reviews--> */}
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                      {/* <!-- Product price--> */}
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center text-center d-flex justify-content-between">
                      <h4 className ="mt-4 text-success"> ${prd.product_price} </h4>
                      <Link
                        className="btn btn-outline-dark mt-auto ms-2"
                        to="/aboutproducts"
                      >
                        Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutProduct;
