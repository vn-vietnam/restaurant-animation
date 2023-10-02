const nav = document.querySelector(".nav");
let lastScroll = 0;
window.addEventListener("scroll", () => {
	// console.log(window.scrollY);
	const currentScroll = window.scrollY;
	if (currentScroll >= 0) {
		nav.classList.add("scroll-down");
	}
	if (currentScroll < lastScroll && nav.classList.contains("scroll-down")) {
		// nav.classList.add("scroll-up");
		nav.classList.remove("scroll-down");
	}
	if (currentScroll > lastScroll && nav.classList.contains("scroll-down")) {
		// nav.classList.remove("scroll-up");
		nav.classList.add("scroll-down");
	}
	lastScroll = currentScroll;
});

// menu

// lenis

const lenis = new Lenis();

lenis.on("scroll", (e) => {
	// console.log(e)
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// loader
gsap.to(".loader .icon", 1, {
	// y: -1000,
	delay: 0.5,
	opacity: 0,
	// height: 0,
});
gsap.to(".loader-title", 1, {
	// y: -1000,
	delay: 0.5,
	opacity: 0,
	// height: 0,
});
gsap.to(".loader", 1, {
	delay: 1,
	height: 0,
});
gsap.from(".main", 2, {
	delay: 1,
	opacity: 0,
});
gsap.from(".nav-top > div", 2, {
	delay: 1,
	y: 50,
	opacity: 0,
});
gsap.from(".bot-item", 2, {
	delay: 2,
	y: 30,
	opacity: 0,
});
gsap.from(".nav-bot", 2, {
	delay: 2,
	y: 30,
});

//
gsap.from(".location-nth", 2, {
	delay: 3,
	opacity: 0,
	// height: 0,
	// y: 10,
	stagger: {
		amount: 1,
	},
});

// language / night day
// text running
