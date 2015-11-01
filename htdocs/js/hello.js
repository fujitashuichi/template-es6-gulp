(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1]);
