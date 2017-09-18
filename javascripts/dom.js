"use strict";

const outputDiv = document.getElementById("output");

const domBuilder = (sandwichOption) => {
	let domString = "";
	domString +=			`<div class="caption" id="item-container">`;	
	domString +=				`<label class="form-check-label">`;	
	domString +=					`<input class="form-check-input" type="checkbox" value="${Object.keys(sandwichOption)[1]}">`;	
	domString +=					`${Object.keys(sandwichOption)[1]}`;	
	domString +=					`<div class="col-xs-1"></div>`;	
	domString +=				`</label>`;	
	domString +=			`</div>`;	
	return domString;
};

const domOutput = (currentArray) => {
	let domOutput = "";
	for (let i = 0; i < currentArray.length; i++) {

		domOutput += (i % 12 === 0) ? `<div class="row">` : "";

		domOutput += (i === 0) ? `<div data-category= ${currentArray[i].category} class="thumbnail">` : "";
		domOutput += (i === 0) ? `<h3>${currentArray[i].category}</h3>` : "";
		domOutput += (i === 0) ? `<div class="col-sm-6 col-md-4 col-md-offset-1">` : "";

		domOutput += domBuilder(currentArray[i]);

		domOutput += (i % 6 === 2) ? `</div>` : "";
		domOutput += (i % 6 === 2) ? `</div>` : "";
		domOutput += (i % 6 === 2) ? `</div>` : "";
	}
	return domOutput;
};

const printToDom = (currentArray) => {
	outputDiv.innerHTML += domOutput(currentArray);
};

module.exports = printToDom;