
'use strict';

function click(e) {
  chrome.tabs.executeScript(null,
      {code: "Confidence = " + Number(e.target.id)+'; window.init()' });
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});