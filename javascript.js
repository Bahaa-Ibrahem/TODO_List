function changeDirction() {
    var dir = document.body.getAttribute('dir');
    dir == 'ltr' ? document.body.setAttribute('dir', 'rtl') : document.body.setAttribute('dir', 'ltr');
}