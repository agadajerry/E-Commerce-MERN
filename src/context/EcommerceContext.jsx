import { useState, createContext, useEffect } from "react";
import axios from "axios";

// context
const EcommerceContext = createContext();

//get product details from the local storage

export const EcommerceProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [userCart, setUserCart] = useState([]);

  const [getTotalPrice, setGetTotalPrice] = useState(0)
  const [getTotalQtty, setTotalQtty] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  const [productArr, setProductArr] = useState([]);

  //get product from the local storage and set it to state;

  useEffect(() => {
    const products = localStorage.getItem("cart");

    if (products) {

      // allProduct = JSON.parse(products);


      setProductArr(JSON.parse(products));
      // console.log(arrayOfValues)

      productSummary();
    }
  }, []);


  //this function handle cart summary

  const productSummary = () => {
    
    let reProduct = [];
    let qttyTotal = 0;
    let sumTotalPrice = 0;
    reProduct = JSON.parse(localStorage.getItem("cart"))
    reProduct.map((pr) => {

      qttyTotal += pr.quantity;
      sumTotalPrice+= pr.totalPrice

      setGetTotalPrice(sumTotalPrice);
      setTotalQtty(qttyTotal);
      return qttyTotal
    })

  }





  //fetch all product from the data base
  const productUrl = "http://localhost:4000/product/allproduct";

  useEffect(() => {
    async function fetchProduct() {
      const res = await axios.get(productUrl);
      setProductList(res.data);
      return res;
    }

    fetchProduct();
  }, []);

  function addToCartLocally(
    id,
    product_name,
    product_price,
    product_photo_url,
    quantity,
    
  ) {
    let product = {
      id: id,
      product_name: product_name,
      product_price: product_price,
      product_photo_url: product_photo_url,
      quantity: quantity,
      totalPrice: Number(quantity * product_price)
    };
    let qtyUpdated = false;
    // find the item in the product array
    for (let i = 0; i < productArr.length; i++) {
      let item = productArr[i];
      if (item.id === id) {

        item.quantity++;
        item.totalPrice = item.product_price * item.quantity;
        qtyUpdated = true;
        break;
      }
      //if found increase the quantity
    }

    // else add product to the array

    setProductArr(qtyUpdated ? [...productArr] : [...productArr, product]);
    productSummary()
  }


  //reduce from selected items

   function reduceFromCartLocally(id) {
     
     let qtyUpdated = false;
     // find the item in the product array
     for (let i = 0; i < productArr.length; i++) {
       let item = productArr[i];
       if (item.id === id) {
         item.quantity--;
         if (item.quantity < 0) {

           productArr.splice(1, 1)
           break;
         }
         item.totalPrice = item.product_price * item.quantity;
         qtyUpdated = true;
         break;
       }
       
       //if found increase the quantity
     }

     // else add product to the array

     setProductArr(qtyUpdated ? [...productArr] : [...productArr]);
     productSummary();
   }
  
  
  //remove item from the cart


  function removeFromCartLocally(id, index) {
     console.log(index);
     let isDeleted = false;
     // find the item in the product array
     for (let i = 0; i < productArr.length; i++) {
       let item = productArr[i];
       if (item.id === id) {
         productArr.splice(index-1, 1)
         isDeleted = true;
         break;
       }
       //if found increase the quantity
     }

     // else add product to the array

     setProductArr(isDeleted ? [...productArr] : [...productArr]);
     productSummary();

   }
  // function that handle add to cart in local storage

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(productArr));
  }, [productArr]);

  // this function handle local storage access

  //get user select product from cart

  function getAllSelectedCartItem(id) {
    if (id !== "") {
      axios
        .get(`http://localhost:4000/product/user/cart/${id}`)
        .then((res) => {
          setUserCart(res.data);
        })
        .catch((err) => console.error(err));
    }
  }
  //cart the quantity of all product in cart

  const [editUpdateProduct, setEditUpdateProduct] = useState({
    products: {},
    edit: false,
  });

  //this function is set on each time edit button is clicked
  const setProductForEdit = (products) => {
    setEditUpdateProduct({
      products,
      edit: true,
    });
  };

  // this method handle  delete of product

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product ?")) {
      axios
        .delete(`http://localhost:4000/product/${id}`)
        .then(() => console.log(" Deleted..."))
        .catch((err) => console.error(err));

      //refresh
      setProductList(productList.filter((prd) => prd._id !== id));
    }
  };

  // a function that update product when the produt details are set on input fields

  const updateProductInfo = (id, updProduct) => {
    setProductList(
      productList.map((product) =>
        product._id === id ? { ...product, ...updProduct } : product
      )
    );
  };



  useEffect(() => {
   
   const userId = localStorage.getItem("isLogin");
   if (userId === "true") {
     setIsLogin(true);
   }
 }, []);

  return (
    <EcommerceContext.Provider
      value={{
        setProductForEdit,
        editUpdateProduct,
        setEditUpdateProduct,
        updateProductInfo,
        productList,
        deleteProduct,
        // addTocart,
        userCart,
        getAllSelectedCartItem,
        addToCartLocally,
        getTotalQtty,
        getTotalPrice,
        reduceFromCartLocally,
        removeFromCartLocally,
        isLogin
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};

export default EcommerceContext;
