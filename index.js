const navbar = document.getElementById('menu')
const menubar = document.getElementById('menu-bar')
const closebar = document.getElementById('close-bar')

menubar.addEventListener('click', () => {
    navbar.style.display = "flex"
    menubar.style.display = "none"
    closebar.style.display = "inline-block"
})


closebar.addEventListener('click', () => {
    navbar.style.display = "none"
    menubar.style.display = "inline-block"
    closebar.style.display = "none"
})