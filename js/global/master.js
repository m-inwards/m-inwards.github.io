fetch('/html/header.html')
    .then(x=> x.text())
    .then(y=> document.getElementById('header').innerHTML = y)

fetch('/html/footer.html')
    .then(x=> x.text())
    .then(y=> document.getElementById('footer').innerHTML = y)