let appFooter = `
    <p class="previous-page"><a title="Back to the main page" href="./index.html" onclick="javascript:delay('./index.html');return false;">< Back to the main page</a></p>
`;

document.getElementById("app-footer").innerHTML = appFooter;

//obfucate email address
var me = "george";
var place = "starmode.io";
var elink = document.getElementById("email");
elink.href = `mailto:${me}@${place}`;