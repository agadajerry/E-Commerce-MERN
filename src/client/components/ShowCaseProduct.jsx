import { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Carousel from "../Carousel";
import Navigation from "./Navigation";
import ProductCategory from "./ProductCategory";
import EcommerceContext from "../../context/EcommerceContext";

function ShowCaseProduct() {
  const { productList, addToCartLocally, getTotalQtty } = useContext(EcommerceContext);
   

  return (
    <>
      <Navigation getTotalQtty={getTotalQtty} />
      <Carousel />
      <ProductCategory />

      <div className="container mt-5  px-5 text-center">
        <h3
          style={{
            color: "#2ccaca",
            fontFamily: "cursive",
            border: "1px solid",
            overflow: "hidden",
          }}
        >
          All Wears
        </h3>
      </div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {productList.map((prd) => (
              <div className="col mb-5" key={prd._id}>
                <div className="card h-100">
                  {/* <!-- Product image--> */}
                  <Link to={`/aboutproduct/${prd._id}/MenWears`}>
                    {" "}
                    <img
                      className="card-img-top "
                      src={prd.product_photo_url}
                      style={{ height: "300px" }}
                      alt="..."
                    />
                  </Link>
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
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center text-center d-flex justify-content-between">
                      <h4 className="mt-4 text-success">
                        {" "}
                        ${prd.product_price}{" "}
                      </h4>
                      <a
                        href="/allproduct"
                        className="btn btn-outline-dark mt-auto ms-2"
                        onClick={() =>
                          addToCartLocally(
                            prd._id,
                            prd.product_name,
                            prd.product_price,
                            prd.product_photo_url,
                            1
                          )
                        }
                      >
                        Add to cart
                      </a>
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

export default ShowCaseProduct;
