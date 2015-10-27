(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = $(function () {
	/*/--------------------------------\*\
 |*| VARIABLES
 \*\--------------------------------/*/
	// const
	var fps = 30;
	var frameMsec = 100 / fps >> 0;
	var ballNum = 153;

	// set canvas
	var cvs = $(".amoeba").get(0);
	var ctx = cvs.getContext("2d");

	// canvas scale
	cvs.width = $(".amoeba").width();
	cvs.height = $(".amoeba").height();
	var width = cvs.width;
	var height = cvs.height;

	// set center
	var centerX = width / 2;
	var centerY = height / 2;

	// first points
	var locX = new Array(ballNum);
	var locY = new Array(ballNum);

	// set speed
	var speedX = new Array(ballNum);
	var speedY = new Array(ballNum);

	// set obj and radius
	var ball = new Array(ballNum);

	// color
	var white = "rgba(255,255,255,1)";
	var gray = "rgba(153,153,153,1)";
	var black = "rgba(0,0,0,1)";
	var bgcolor = "#012";

	/*/--------------------------------\*\
 |*| INIT/PLAY
 \*\--------------------------------/*/
	$(function () {
		for (var i = 0; i < ballNum; i++) {
			// speed
			speedX[i] = Math.random() - 0.5;
			speedY[i] = Math.random() - 0.5;
			// first points
			locX[i] = Math.random() * width;
			locY[i] = Math.random() * height;
			// radius
			ball[i] = Math.random() * 8;
		}
		// set event handler
		setInterval(onDraw, frameMsec);
	});

	/*/--------------------------------\*\
 |*| INTERVAL HANDLER
 \*\--------------------------------/*/
	function onDraw() {
		// reset
		clearDisp();
		//draw
		smallball();
	}

	/*/--------------------------------\*\
 |*| OBJECTS
 \*\--------------------------------/*/
	// clear display
	function clearDisp() {
		ctx.beginPath();
		ctx.clearRect(0, 0, width, height);
	}

	// small balls
	function smallball() {
		// set position
		for (var i = 0; i < ballNum; i++) {
			// overwrite position
			locX[i] += speedX[i];
			locY[i] += speedY[i];

			// conflicted wall
			if (locX[i] < 0 || locX[i] > width) {
				speedX[i] *= -1.0;
			} else if (locY[i] < 0 || locY[i] > height) {
				speedY[i] *= -1.0;
			}

			// blur
			ctx.shadowBlur = ball[i];
			ctx.shadowColor = white;
			// draw ball
			ctx.beginPath();
			ctx.fillStyle = white;
			ctx.arc(locX[i], locY[i], ball[i], 0, Math.PI * 2.0, true);
			ctx.fill();
		}
	}

	// rondom color
	function color() {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
	}
});

// -------- end -------- //
},{}]},{},[1]);
