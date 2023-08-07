fetch('/header.html')
    .then(x=> x.text())
    .then(y=> document.getElementById('header').innerHTML = y)

fetch('/footer.html')
    .then(x=> x.text())
    .then(y=> document.getElementById('footer').innerHTML = y)

function setFavicons(fav_img){
    let headTitle = document.querySelector('head');
    let favicon = document.createElement('link');
    favicon.setAttribute('rel','shortcut icon');
    favicon.setAttribute('href',fav_img);
    headTitle.appendChild(favicon);
}
setFavicons('/media/profile_pic.png');