"use strict";

document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener("scroll", function (e) {
		if (pageYOffset === 0) {
			this.document.querySelector("nav").classList.remove("header");
		} else {
			this.document.querySelector("nav").classList.add("header");
		}
	});
});