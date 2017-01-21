var div = document.createElement("DIV");
div.id = "annoyingcat";
var cats = ['cat1.png', 'cat2.png','cat3.png']
var chosen = cats[Math.floor(Math.random() * cats.length)];

var img = document.createElement("IMG");
var imgURL = chrome.extension.getURL(chosen);
img.src = imgURL;
div.appendChild(img);
document.body.appendChild(div);
