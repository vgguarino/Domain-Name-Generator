/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

//window.onload = function() {
//write your code here

console.log("Domain Generator 🌐");

const pronoun = ["the", "our", "last"];

const adj = ["great", "big", "of"];

const noun = ["jogger", "racoon", "us"];

const end = [".com", ".net", ".es", ".io", ".us"];

let domain = [];

pronoun.forEach(pronombre => {
  adj.forEach(adjetivo => {
    noun.forEach(nombre => {
      end.forEach(tld => {
        domain.push(pronombre + adjetivo + nombre + tld);
      });
    });
  });
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Generator() {
  return (document.querySelector("#domaingenerator1").innerHTML = `
  ${domain[getRandomInt(domain.length)]}`);
}

console.log(domain);
//};
