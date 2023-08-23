let appFooter = `
    <p class="previous-page"><a title="Back to the blog page" href="../blog.html" onclick="javascript:delay('../blog.html');return false;">< Back to the blog page</a></p>

    <p class="previous-page"><a title="Back to the main page" href="../index.html" onclick="javascript:delay('../index.html');return false;">< Back to the main page</a></p>
`;

document.getElementById("app-footer").innerHTML = appFooter;