"use strict";

const printToDom = require("./dom");
const data = require("./data");

const showSandwichBtn = document.getElementById("sandwichBtns");
const sammieDiv = document.getElementById("yourSandwich");

let selectedTopping;
let finalSandwich = [];
let totalPrice = 0;

const getCheckboxClick = () => {
	document.body.addEventListener("click", (event) => {
		if (event.target.type === "checkbox") {
			selectedTopping = event.target.value;
			addTopping(selectedTopping);
		}
	});
};

const addTopping = (topping) => {
	if (finalSandwich.indexOf(topping) === -1 ) {
		finalSandwich.push(topping);
		// totalPrice += toppingPrice;
	} 
	else {
		removeTopping(selectedTopping);
	}
};

const removeTopping = (unSelectedTopping) => {
	// totalPrice -= unSelectedToppingPrice;
	let indexOfWhatWeWantToRemove = finalSandwich.indexOf(unSelectedTopping);
	finalSandwich.splice(indexOfWhatWeWantToRemove, 1);

};

const showFinalSandwich = () => {
	showSandwichBtn.addEventListener("click", (event) => {
		let domString = "";
		for (let i=0; i < finalSandwich.length; i++) {
			domString += `<p>${finalSandwich[i]}</p>`;
			sammieDiv.innerHTML = domString;
		}
	});
};


module.exports = {getCheckboxClick, showFinalSandwich};