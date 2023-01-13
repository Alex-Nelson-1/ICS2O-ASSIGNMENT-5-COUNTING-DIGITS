// Created by: Alex Nelson
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-ASSIGNMENT-5-COUNTING-DIGITS/sw.js", {
    scope: "/ICS2O-ASSIGNMENT-5-COUNTING-DIGITS/",
  })
}

/**
 * This function displays an alert.
 */
function count() {
  var num = document.getElementById("age").value
  var number = Number(num)
  let counter = 0
  if (Number.isInteger(number) == false) {
    while (Number.isInteger(number) == false) {
      number = number * 10
    }
  }
  if (number > 0) {
    while (number > 0.9999999999999999) {
    number = number / 10
    counter++
    }
  }
  document.getElementById("output").innerHTML = " " + counter
}

