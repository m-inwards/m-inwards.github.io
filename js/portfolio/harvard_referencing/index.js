function select_referencing_item(id) {
    let options = document.getElementsByClassName('referencing-item');

    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('referencing-item-active');
    }

    document.getElementById(id).classList.add('referencing-item-active');
}