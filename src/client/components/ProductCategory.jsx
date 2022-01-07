
function ProductCategory() {
    return (
        <>
            <div className="container mt-5 ms-3">
             
                <div className="row">
                     <div className="col-md-4 col-sm-4"></div>
                     <div className="col-md-4 col-sm-4"></div>
                    <div className="col-md-4 d-flex  navbar-light py-2">
                        <a href ="/allproduct" className="ms-3 btn btn-secondary">All Products</a>
                        <a href ="/WomenWears/female" className="ms-3 btn btn-secondary ">Women's Wear</a>
                        <a href ="/MenWears" className="ms-3 btn btn-secondary">Men's Wear</a>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ProductCategory
