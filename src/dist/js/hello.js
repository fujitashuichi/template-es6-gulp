'use strict';

module.exports = $(function () {
	/*/--------------------------------\*\
 |*| VARIABLES
 \*\--------------------------------/*/
	var inputText = document.getElementByName('input01');
	var outputBtn = document.getElementById('form-btn01');
	// color
	var white = "rgba(255,255,255,1)";
	var gray = "rgba(153,153,153,1)";
	var black = "rgba(0,0,0,1)";
	var bgcolor = "#012";

	/*/--------------------------------\*\
 |*| INIT/PLAY
 \*\--------------------------------/*/
	$(function () {
		outputBtn();
		console.log("running");
	});

	/*/--------------------------------\*\
 |*| INTERVAL HANDLER
 \*\--------------------------------/*/
	outputBtn.onmousedown = function (e) {
		alert('mouse down!');
	};

	/*/--------------------------------\*\
 |*| OBJECTS
 \*\--------------------------------/*/
});

// -------- end -------- //