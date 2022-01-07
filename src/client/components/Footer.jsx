
function Footer({userId}) {
    return (
        <>
    <footer className="bg-dark text-center text-white">
  <div className="container p-4 pb-0">
    {/* <!-- Section: Form --> */}
    <div className="">
      <form>
        {/* <!--Grid row--> */}
        <div className="row d-flex justify-content-center">
          {/* <!--Grid column--> */}
          <div className="col-auto">
            <p className="pt-2">
                      <strong>Sign up for our newsletter { userId}</strong>
            </p>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div className="col-md-5 col-12">
            {/* <!-- Email input --> */}
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example29" className="form-control" placeholder="Email Address" />
            </div>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div className="col-auto">
            {/* <!-- Submit button --> */}
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
          {/* <!--Grid column--> */}
        </div>
        {/* <!--Grid row--> */}
      </form>
    </div>
    {/* <!-- Section: Form --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
    © 2020 Copyright:
    <a className="text-white" href="https://JERRYSOFTTECHY.com">AVIO E-COMMERCE</a>
  </div>
  {/* <!-- Copyright --> */}
</footer> 
        </>
    )
}

export default Footer
