"use strict";

const loadCondiments = (onCondimentLoad, onCondimentError) => {
	const condimentLoader = new XMLHttpRequest();
	condimentLoader.addEventListener("load", onCondimentLoad);
	condimentLoader.addEventListener("error", onCondimentError);
	condimentLoader.open("GET", "../data/condiments.json");
	condimentLoader.send();
};

module.exports = loadCondiments;