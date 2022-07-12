/**
 * Hero type effect
 */
const typed = document.getElementById('typed');
let typed_strings = typed.getAttribute('data-typed-items');
typed_strings = typed_strings.split(',');

while (true) {
  typed_strings.forEach((item, i) => {
    typed.innerHTML = item;
  });

}
