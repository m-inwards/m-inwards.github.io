/**
 * Hero type effect
 */
const typed = document.getElementById('typed');
let typed_strings = typed.getAttribute('data-typed-items');
typed_strings = typed_strings.split(',');

function typing() {
  typed_strings.forEach((item, i) => {
    var i = 0;
    var txt = item;
    var speed = 50;
    typed.innerHTML = '';
    typeWriter();

    function typeWriter() {
      if (i < txt.length) {
        typed.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  });
  setTimeout(typing, 100);
}
