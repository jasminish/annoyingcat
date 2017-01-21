var annoyingdiv = document.getElementById("annoyingcat");

if (annoyingdiv == null) {
  var div = document.createElement("DIV");
  div.id = "annoyingcat";

  var img = document.createElement("IMG");
  var imgURL = chrome.extension.getURL('pusheen.png');
  img.src = imgURL;
  div.appendChild(img);
  document.body.appendChild(div);

} else {

  var img = document.createElement("IMG");
  var imgURL = chrome.extension.getURL('pusheen.png');
  img.src = imgURL;
  annoyingdiv.appendChild(img);

}
