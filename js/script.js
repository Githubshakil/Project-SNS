// banner section
let banner = document.querySelector("#banner")
let logo = document.querySelector(".logo")
let lang = document.querySelector(".lang")
let get = document.querySelector(".get")

let cards = document.querySelector(".cards")
let like_love = document.querySelector(".like_love")
let para = document.querySelector(".para")
let drawer = document.querySelector(".drawer")
let close = document.querySelector(".close")
let member = document.querySelector(".member")
let membership = document.querySelector(".membership")

let sidebyside = document.querySelector(".sidebyside")


banner.addEventListener("mousemove", function (event) {

    cards.style.transform = `translate(-${event.clientX / 100}px,-${event.clientY / 100}px)`
    lang.style.transform = `translate(-${event.clientX / 100}px,-${event.clientY / 100}px)`
    get.style.transform = `translate(-${event.clientX / 100}px,-${event.clientY / 100}px)`
    logo.style.right = `0`
    logo.style.scale = `1`



})
logo.addEventListener("mousemove", function (event) {
    logo.style.right = `100px`
    logo.style.scale = `1.3`
})

lang.addEventListener("mousemove", function (event) {
    lang.style.right = `100px`
})

get.addEventListener("click", function (event) {
    get.style.left = `100px`
})
cards.addEventListener("mousemove", function (event) {
    like_love.style.transform = `translate(-${event.clientX / 100}px,-${event.clientY / 100}px)`


})
banner.addEventListener("mousemove", function (event) {
    para.style.transform = `translate(-${event.clientX / 200}px,-${event.clientY / 100}px)`

})


get.addEventListener("click", function () {
    drawer.style.left = "0"

})
close.addEventListener("click", function () {
    drawer.style.left = "-300px"

})

// about section

let about = document.querySelector("#about")

let title_h6 = document.querySelector(".title_h6")
let title_h2 = document.querySelector(".title_h2")
let title_p = document.querySelector(".title_p")
let text = document.querySelector(".text")
let img = document.querySelector(".img")



about.addEventListener("mousemove", function (event) {
    title_h6.style.transform = `translate(-${event.clientX / 100}px,-${event.clientY / 100}px)`
    title_h2.style.transform = `translate(-${event.clientY / 100}px,-${event.clientX / 100}px)`
    title_p.style.transform = `translate(-${event.clientY / 200}px,-${event.clientX / 50}px)`
    text.style.transform = `translate(-${event.clientY / 200}px,-${event.clientX / 50}px)`
    img.style.transform = `translate(-${event.clientX / 100}px,-${event.clientY / 50}px)`

})


// service section

let service = document.querySelector("#service")
let leftbox = document.querySelector(".leftbox")
let service_h6 = document.querySelector(".service_h6")
let service_h2 = document.querySelector(".service_h2")
let rightbox = document.querySelector(".rightbox")



service.addEventListener("mousemove", function (event) {
    service_h6.style.transform = `translate(-${event.clientY / 100}px,-${event.clientX / 100}px)`
    service_h2.style.transform = `translate(-${event.clientX / 100}px,-${event.clientY / 100}px)`
    leftbox.style.transform = `translate(-${event.clientY / 100}px,-${event.clientX / 100}px)`
    rightbox.style.transform = `translate(-${event.clientX / 100}px,-${event.clientY / 100}px)`

})

// mission And Vision section

let mission_vision = document.querySelector("#mission_vision")
let mission_content = document.querySelector(".mission_content")
let content_img = document.querySelector(".content_img")

mission_vision.addEventListener("mousemove", function (event) {
    mission_content.style.transform = `translate(-${event.clientY / 100}px,-${event.clientX / 100}px)`
    mission_content.style.transform = `translate(-${event.clientY / 100}px,-${event.clientX / 100}px)`
    content_img.style.transform = `translate(-${event.clientX / 50}px,-${event.clientY / 50}px)`


})

// testimanial section

let testimanial = document.querySelector("#testimanial")
let testimanial_h6 = document.querySelector(".testimanial_h6")
let testimanial_h2 = document.querySelector(".testimanial_h2")


testimanial.addEventListener("mousemove", function (event) {
    testimanial_h6.style.transform = `translate(-${event.clientY / 100}px,-${event.clientX / 100}px)`
    testimanial_h2.style.transform = `translate(-${event.clientY / 100}px,-${event.clientX / 100}px)`
})