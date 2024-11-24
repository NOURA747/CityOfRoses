$(document).ready(function () {
	const modal = $("#modal1");
	const parts = $(".nav-link1");
	const close = $(".close");

	parts.on("click", function () {
		const title = $(this).find("h2").text();
		const category = $(this).find("p").text();
		const content = $(this).find("a").attr("href");
		modal.css("display", "block");
	});

	close.on("click", function () {
		modal.css("display", "none");
	});

	$(window).on("click", function (event) {
		if (event.target === modal[0]) {
			modal.css("display", "none");
		}
	});
});


$(document).ready(function () {
	const modal = $("#modal2");
	const parts = $(".nav-link2");
	const close = $(".close");

	parts.on("click", function () {
		const title = $(this).find("h2").text();
		const category = $(this).find("p").text();
		const content = $(this).find("a").attr("href");
		modal.css("display", "block");
	});

	close.on("click", function () {
		modal.css("display", "none");
	});

	$(window).on("click", function (event) {
		if (event.target === modal[0]) {
			modal.css("display", "none");
		}
	});
});


$(document).ready(function () {
	const modal = $("#modal3");
	const parts = $(".nav-link3");
	const close = $(".close");

	parts.on("click", function () {
		const title = $(this).find("h2").text();
		const category = $(this).find("p").text();
		const content = $(this).find("a").attr("href");
		modal.css("display", "block");
	});

	close.on("click", function () {
		modal.css("display", "none");
	});

	$(window).on("click", function (event) {
		if (event.target === modal[0]) {
			modal.css("display", "none");
		}
	});
});


$(document).ready(function () {
	const modal = $("#modal4");
	const parts = $(".nav-link4");
	const close = $(".close");

	parts.on("click", function () {
		const title = $(this).find("h2").text();
		const category = $(this).find("p").text();
		const content = $(this).find("a").attr("href");
		modal.css("display", "block");
	});

	close.on("click", function () {
		modal.css("display", "none");
	});

	$(window).on("click", function (event) {
		if (event.target === modal[0]) {
			modal.css("display", "none");
		}
	});
});


$(document).ready(function () {
	const modal = $("#modal5");
	const parts = $(".nav-link5");
	const close = $(".close");

	parts.on("click", function () {
		const title = $(this).find("h2").text();
		const category = $(this).find("p").text();
		const content = $(this).find("a").attr("href");
		modal.css("display", "block");
	});

	close.on("click", function () {
		modal.css("display", "none");
	});

	$(window).on("click", function (event) {
		if (event.target === modal[0]) {
			modal.css("display", "none");
		}
	});
});


$(document).ready(function () {
	const modal = $("#modal6");
	const parts = $(".nav-link6");
	const close = $(".close");

	parts.on("click", function () {
		const title = $(this).find("h2").text();
		const category = $(this).find("p").text();
		const content = $(this).find("a").attr("href");
		modal.css("display", "block");
	});

	close.on("click", function () {
		modal.css("display", "none");
	});

	$(window).on("click", function (event) {
		if (event.target === modal[0]) {
			modal.css("display", "none");
		}
	});
});

