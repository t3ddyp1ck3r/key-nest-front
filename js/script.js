"use strict"
const accordionAboutHeaderNodes = document.querySelectorAll(
	".accordion-about-header"
)

accordionAboutHeaderNodes.forEach((btn) => {
	btn.addEventListener("click", function () {
		const accordionBody = this.parentElement
		accordionBody.classList.toggle("active")
	})
})
