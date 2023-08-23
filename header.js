// href delay function. This allows fade-in/fade-out effects while clicking on links.
function delay(URL)
{
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove('global-fadein');
    body.classList.add('global-fadeout');
    setTimeout( function() { window.location = URL }, 500);
}