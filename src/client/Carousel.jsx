
import Typed from "typed.js";
import { useEffect, useRef } from "react";


function Carousel() {


     const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings:['Welcome to AVIO Ecommerce Store','We are here to serve you better','Jerrysofttechy'],
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
        });

        return () => {
            typed.destroy()
        };
    }, [])
    

    return (
      <>
        <header className="bg-dark py-5" style={{ height: "500px" }}>
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder py-5">AVIO Ecommerce Store</h1>
              <span className="lead fw-bold  mb-2 text-success" ref={el}></span>
           
            </div>
          </div>
        </header>
      </>
    );
}

export default Carousel
