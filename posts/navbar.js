let appNavbar = `
  <div class="topnav" id="appTopnav">
    <a title="starmode recruiting" href="./index.html" onclick="javascript:delay('./index.html');return false;" id="topnav-logo-link">starmode <em>recruiting</em></a>

    <a title="About Me" href="../about.html" onclick="javascript:delay('../about.html');return false;" id="topnav-first-link">about</a>
    <a title="Blog" href="../blog.html" onclick="javascript:delay('../blog.html');return false;">blog</a>
    <a title="Jobs" href="../jobs.html" onclick="javascript:delay('../jobs.html');return false;">jobs</a>
    <a title="Candidates" href="../candidates.html" onclick="javascript:delay('../candidates.html');return false;">candidates</a>

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