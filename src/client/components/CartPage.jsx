import Navigation from "./Navigation";
import Footer from "./Footer";
import EcommerceContext from "../../context/EcommerceContext";
import { useContext, useState } from "react"


    //get cart details
    
    let reProduct = [];
reProduct = JSON.parse(localStorage.getItem("cart")) || [];
      
function CartPage() {

    const [lessQtty, setLessQtty] = useState("")
    const [alertV, setAlertV] = useState("")
    const {
      getTotalQtty,
      getTotalPrice,
      addToCartLocally,
      reduceFromCartLocally,
        removeFromCartLocally,
      isLogin
    } = useContext(EcommerceContext);

  //this function handle cart summary

  
    function checkHandler() {
    
        if (getTotalQtty <= 0) {

            setLessQtty("You cannot checkout an empty basket. Add to cart and try again")
            setAlertV("alert alert-danger")
        } else {
            
            localStorage.removeItem("cart")
           window.location= "/cart/checkout"

        }
}
  
      
  
    
  return (
    <>
      <Navigation getTotalQtty={getTotalQtty} />
      <div className="container mt-5 bg-white">
        <div className="container mb-1">
          {" "}
          <h1 className="text-center mb-5">Cart Summary</h1>
        </div>

        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
                <p className={alertV}>{lessQtty}</p>
            <table className=" table ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Item</th>
                  <th scope="col"></th>
                  <th scope="col">Price</th>
                  <th scope="col">TotalQuantity</th>
                  <th scope="col">TotalPrice</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white">

                {reProduct.map((prd, id = 0) => (
                  <tr className="text-center mb-2" key={prd.id}>
                    <td>{++id}</td>
                    <td>
                      <div>
                        <p>{prd.product_name}</p>
                        <a
                          href="/allproduct/cart"
                          className="btn text-danger"
                          onClick={() => removeFromCartLocally(prd.id, id++)}
                        >
                          <i className="fas fa-trash"></i> Remove
                        </a>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <img
                        src={prd.product_photo_url}
                        style={{ height: "60px" }}
                      />
                    </td>
                    <td>{prd.product_price}</td>
                    <td>{prd.quantity}</td>
                    <td>{prd.totalPrice}</td>
                    <td>
                      <div className="d-flex justify-content-around">
                        {" "}
                        <a
                          href="/allproduct/cart"
                          className="btn btn-danger"
                          onClick={() => reduceFromCartLocally(prd.id)}
                        >
                          -
                        </a>
                        <a
                          href="/allproduct/cart"
                          className="btn btn-success"
                          onClick={() =>
                            addToCartLocally(
                              prd.id,
                              prd.product_name,
                              prd.product_price,
                              prd.product_photo_url,
                              1
                            )
                          }
                        >
                          +
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <h3 className=" p-2 text-center text-success">
                  <span className="text-dark"> Grand Total:</span> $
                  {getTotalPrice}{" "}
                </h3>

                <div className="d-md-flex  justify-content-between mt-5 mb-5">
                  <a href="/allproduct" className="btn btn-secondary btn-sm">
                    {" "}
                    Continous Shopping
                  </a>

                  {isLogin ? (
                    <a
                      className="btn btn-primary btn-md  ms-3"
                      onClick={checkHandler}
                    >
                      {" "}
                      Checkout
                    </a>
                  ) : (
                    <a className="btn btn-primary  btn-md ms-3" href="/login">
                      {" "}
                      Login Before Checkout
                    </a>
                  )}
                </div>
              </div>
            </div>

            {getTotalQtty === 0 && (
              <p className="alert alert-danger m-4"> Cart is empty</p>
            )}
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CartPage

