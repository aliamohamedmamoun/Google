"use strict";

window.onload = function() {
  let f = document.getElementById("search").focus();
  document.getElementById("apps-list").style.visibility = "hidden";
  document.getElementById("google-account").style.visibility = "hidden";
  document.getElementById("settings-list").style.visibility = "hidden";
  document.getElementById("feedback").style.display = "none";
};

function dispList(id) {
  let x = document.getElementById(id);
  if (x.style.visibility === "hidden") {
    document.getElementById(id).style.visibility = "visible";
  } else {
    document.getElementById(id).style.visibility = "hidden";
  }
}
function dispFeedback() {
  document.getElementById("feedback").style.display = "block";
}
function Cancel() {
  let x = document.getElementById("feedback");
  if (x.style.display === "block") {
    document.getElementById("feedback").style.visibility = "hidden";
  } else {
    document.getElementById("feedback").style.display = "block";
  }
}
function check() {
  if (document.getElementById("includeScreenshot").checked === true) {
    document
      .getElementById("checked-img")
      .setAttribute("src", "/icons/icons8-unchecked-checkbox-50.png");
    document.getElementById("myCanvas").style.display = "none";
    document.getElementById("customized-checkbox").style.backgroundColor =
      "rgba(0, 0, 0, 0.12)";
  } else {
    document
      .getElementById("checked-img")
      .setAttribute("src", "/icons/icons8-checked-checkbox-50.png");
    document.getElementById("customized-checkbox").style.backgroundColor =
      "rgba(0, 0, 0, 0.12)";
    document.getElementById("myCanvas").style.display = "block";
  }
}
function validateForm() {
  let x = document.getElementById("textArea").value;
  if (x === "") {
    document.getElementById("validation").style.display = "block";
  }
  document.getElementById("textArea").onkeypress = () => {
    document.getElementById("validation").style.display = "none";
  };
  return false;
}
