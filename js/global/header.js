function toggle_menu() {
    let menu_container = document.getElementById('header-side-menu-container');
    let menu = document.getElementById('header-side-menu');

    if (menu_container.style.display === 'block') {
        menu_container.style.display = 'none';
    } else {
        let header_top_bar = document.getElementById('header-top-bar');

        menu_container.style.height = String(window.innerHeight - header_top_bar.offsetHeight) + 'px';
        menu_container.style.position = 'absolute';
        menu_container.style.top = String(header_top_bar.offsetHeight + 20) + 'px';
        menu_container.style.left = '0';

        menu_container.style.display = 'block';
    }
}

function highlight_active_menu_option() {
    switch (window.location.pathname) {
        case '/':
            document.getElementById('home-menu-option').classList.add('active-menu-option');
            break;
        case '/about_me':
            document.getElementById('about-me-menu-option').classList.add('active-menu-option');
            break;
        case '/portfolio':
            document.getElementById('portfolio-menu-option').classList.add('active-menu-option');
            break;
        case '/professional_experience':
            document.getElementById('experience-menu-option').classList.add('active-menu-option');
            break;
    }
}

setTimeout(highlight_active_menu_option, 50);