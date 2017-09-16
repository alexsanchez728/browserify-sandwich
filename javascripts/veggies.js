"use strict";

const loadVeggies = (onVeggieLoad, onVeggieError) => {
	const veggieLoader = new XMLHttpRequest();
	veggieLoader.addEventListener("load", onVeggieLoad);
	veggieLoader.addEventListener("error", onVeggieError);
	veggieLoader.open("GET", "../data/veggies.json");
	veggieLoader.send();
};

module.exports = loadVeggies;