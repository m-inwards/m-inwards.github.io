fetch('/header.html')
    .then(x=> x.text())
    .then(y=> document.getElementById('header').innerHTML = y)

fetch('/footer.html')
    .then(x=> x.text())
    .then(y=> document.getElementById('footer').innerHTML = y)