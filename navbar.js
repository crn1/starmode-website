let appNavbar = `
    <div class="topnav" id="appTopnav">
        <a href="./index.html" id="topnav-logo-link">starmode <em>recruiting</em></a>
        <a href="./about.html" id="topnav-first-link">about</a>
        <!-- <a href="./blog.html">blog</a> -->
        <a href="./candidates.html">candidates</a>
        <a href="./jobs.html">jobs</a>
        <a href="javascript:void(0);" class="icon" onclick="navbarFunction()">
        <i class="fa fa-bars"></i>
        </a>
    </div>
`;

document.getElementById("app-navbar").innerHTML = appNavbar;

function navbarFunction() {
  var x = document.getElementById("appTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}