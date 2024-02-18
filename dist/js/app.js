
const menuicon = document.querySelector(".menuicon")
const menulist = document.querySelector(".menulist")


menuicon.addEventListener("click", function () {
    menulist.classList.toggle("active")
    menuicon.classList.toggle("change")
    document.body.classList.toggle("overflow-hidden")
})

const accordian = document.querySelectorAll(".accordian")


accordian.forEach(function (e) {
    e.addEventListener("click", function () {
        let hide = e.classList.contains("active");
        accordian.forEach(function (e) {
            e.classList.remove("active");
        })
        if (!hide) {
            e.classList.toggle("active");
        }
    })
})