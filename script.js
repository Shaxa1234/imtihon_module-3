"use strict";

const blur = document.querySelector(".blur")
const modal = document.querySelector(".modal")
const header = document.querySelector("header")
const button = document.querySelector(".button")
const close = document.querySelector(".close_btn")

button.addEventListener("click", () => {
  header.classList.add("hidden")
  modal.classList.remove("hidden")
  blur.classList.remove("hidden")
  console.log(123);
})

close.addEventListener("click", () => {
  header.classList.remove("hidden")
  modal.classList.add("hidden")
  blur.classList.add("hidden")
})


document.addEventListener("DOMContentLoaded", () => {
  blur.classList.add("hidden")
})