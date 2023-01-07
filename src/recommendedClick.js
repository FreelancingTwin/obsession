
document.addEventListener("DOMContentLoaded", function(e) {
const recommended = document.getElementsByClassName('recommended')

    Array.from(recommended).forEach(el=> {
        // el.preventDefault()
        el.click()
    })
// console.log(Array.from(recommended))
// console.log(recommended)
})
