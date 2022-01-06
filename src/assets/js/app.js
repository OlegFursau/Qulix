var burger = document.getElementById('burg');
const li = document.getElementById('list');



burger.addEventListener('click', function() {
    if (this.click) {
        li.classList.add('Disp')
    }
})
li.addEventListener('click', function(e) {
    if (this.click) {
        li.classList.remove('Disp')
    }
})