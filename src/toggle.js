import $ from "jquery";


// function componentDidMount(){
  $(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar,#content").toggleClass("active");
    });
  });



//   const sidebar = document.getElementById("sidebar");
//   const content = document.getElementById("content");

// document.getElementById("sidebarCollapse").addEventListener("click", ()=>{
//   sidebar.classList.toggle("active");
//   content.classList.toggle("active");
// });

  

 


