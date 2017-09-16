"use strict";

const loadBreads = require("./bread");
const loadMeats = require("./meat");
const loadCheeses =require("./cheese");
const loadVeggies =require("./veggies");
const loadCondiments = require("./condiments");

let breadsArray = [];
let meatsArray = [];
let cheesesArray = [];
let veggiesArray = [];
let condimentsArray = [];

const errorFunction = () => {
	console.log("it's broke");
};

const whenBreadsLoad = function(){
	breadsArray = JSON.parse(this.responseText).breads;
	// will call loadCategories
	loadMeats(whenMeatsLoad, errorFunction);
};
const whenMeatsLoad = function(){
	meatsArray = JSON.parse(this.responseText).meats;
	loadCheeses(whenCheesesLoad, errorFunction);
};
const whenCheesesLoad = function(){
	cheesesArray = JSON.parse(this.responseText).cheese;
	loadVeggies(whenVeggiesLoad, errorFunction);
};
const whenVeggiesLoad = function(){
	veggiesArray = JSON.parse(this.responseText).veggies;
	loadCondiments(whenCondimentsLoad, errorFunction);
};
const whenCondimentsLoad = function(){
	condimentsArray = JSON.parse(this.responseText).condiments;
	//one last function to bring it all home
		// printToDom
};

const initializer = () => {
	loadBreads(whenBreadsLoad, errorFunction);
};





module.exports = initializer;


