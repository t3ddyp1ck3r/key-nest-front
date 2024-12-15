"use strict"
const accordionAboutHeaderNodes = document.querySelectorAll(
	".accordion-about-header"
)

accordionAboutHeaderNodes.forEach((btn) => {
	btn.addEventListener("click", function () {
		const accordionBody = this.parentElement.querySelector(
			".accordion-about-body"
		)
		accordionBody.classList.toggle("active")
	})
})
