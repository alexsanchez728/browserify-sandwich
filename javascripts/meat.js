"use strict";

const loadMeats = (onMeatLoad, onMeatError) => {
	const meatLoader = new XMLHttpRequest();
	meatLoader.addEventListener("load", onMeatLoad);
	meatLoader.addEventListener("error", onMeatError);
	meatLoader.open("GET", "../data/meat.json");
	meatLoader.send();
};

module.exports = loadMeats;