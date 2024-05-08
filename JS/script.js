const openMenu = document.querySelector("#bt-menu")
const closeMenu = document.querySelector("#close-menu")
const menu = document.querySelector("nav")
const tela = document.querySelector("body")

openMenu.addEventListener("click", () => {
    menu.style.display = "flex"
    openMenu.style.display = "none"
    closeMenu.style.display = "inline"
    tela.style.overflow = "hidden"
})

closeMenu.addEventListener("click", () => {
    menu.style.display = "none"
    openMenu.style.display = "inline"
    closeMenu.style.display = "none"
    tela.style.overflow = "auto"
})

const formPatrocinio = document.querySelector("#formPatrocinio")

formPatrocinio.addEventListener("submit", (e) => {

    const sectionForm = document.querySelector("#secao-patrocinio")
    sectionForm.style.display = "none"

    const alertaDeAgradecimento = document.querySelector("#alerta-de-agradecimento")
    alertaDeAgradecimento.style.display = "flex"

    const tituloObrigado = document.querySelector("#titulo")
    tituloObrigado.innerText = "OBRIGADO!"

    e.preventDefault()
})

const reload = document.querySelector("#reload")

reload.addEventListener("click", () => {
    location.reload()
})