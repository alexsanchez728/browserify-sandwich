"use strict";

const loadBreads = (onBreadLoad, onBreadError) => {
	const breadLoader = new XMLHttpRequest();
	breadLoader.addEventListener("load", onBreadLoad);
	breadLoader.addEventListener("error", onBreadError);
	breadLoader.open("GET", "../data/bread.json");
	breadLoader.send();
};

module.exports = loadBreads;