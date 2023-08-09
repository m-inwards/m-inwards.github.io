let top_bar = document.getElementById('header-top-bar');

top_bar.style.boxShadow = 'none'

/*Typing Code Start*/
let txt_array = [
    'Python Developer',
    'Data Scientist',
    'Website Developer',
    'Database Manager'
],
    speed = 100,
    i = 0,
    current_string = '',
    typing_container = document.getElementById('home-typewriter');

function write_text(txt) {
    let i2 = 0;

    function typeWriter() {
        if (i2 < txt.length) {
            typing_container.innerHTML += txt.charAt(i2);
            i2++;
            setTimeout(typeWriter, speed);
        } else {
            if (i + 1 === txt_array.length) {
                i = 0;
            } else {
                i++;
            }
            setTimeout(loop_items, 1500);
        }
    }

    typeWriter();
}

function loop_items() {
    current_string = txt_array[i]

    typing_container.innerHTML = ''
    write_text(current_string)
}

loop_items();
/*Typing Code End*/