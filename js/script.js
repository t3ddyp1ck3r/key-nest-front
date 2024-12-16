"use strict"
const accordionAboutHeaderNodes = document.querySelectorAll(
	".accordion-about-header"
)

const accordionHeaderNodes = document.querySelectorAll(".accordion-header")

accordionAboutHeaderNodes.forEach((btn) => {
	btn.addEventListener("click", function () {
		const accordionBody = this.parentElement
		accordionBody.classList.toggle("active")
	})
})

accordionHeaderNodes.forEach((btn) => {
	btn.addEventListener("click", function () {
		const accordionBody = this.parentElement
		accordionBody.classList.toggle("active")
	})
})
