"use strict";

const outputDiv = document.getElementById("output");

const domBuilder = (sandwichOption) => {
	let domString = "";
	domString +=	`<div class="col-sm-6 col-md-4 col-md-offset-1">`;	
	domString +=		`<div data-category=${sandwichOption.category} class="thumbnail">`;	
	domString +=			`<h3></h3>`;	
	domString +=			`<div class="caption" id="item-container"`;	
	domString +=				`<label class="form-check-label">`;	
	domString +=					`<input class="form-check-input" type="checkbox" value="${sandwichOption.name}">`;	
	domString +=					`${sandwichOption.name}`;	
	domString +=					`<div class="col-xs-1"</div>`;	
	domString +=				`</label>`;	
	domString +=			`</div>`;	
	domString +=		`</div>`;	
	domString +=	`</div>`;	
	return domString;
};

const domOutput = (currentArray) => {
	let domOutput = "";
	for (let i = 0; i < currentArray.length; i++) {
		domOutput += (i % 2 === 0) ? "<div class='row'>" : "";
		domOutput += domBuilder(currentArray[i]);
		domOutput += (i % 2 === 6) ? "</div>" : "";
	}
	return domOutput;
};

const printToDom = (currentArray) => {
	outputDiv.innerHTML = domOutput(currentArray);
};

module.exports = domBuilder;