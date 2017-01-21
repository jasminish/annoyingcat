var cats = [];
for (var i = 1; i <= 6; i++) {
    cats.push('catimages/cat' + i + '.png');
}


var div = document.createElement("DIV");
div.id = "annoyingcat";
var annoyingdiv = div;
document.body.appendChild(annoyingdiv);

var rmcounter = 1;

function createCat() {
    var chosen = cats[Math.floor(Math.random() * cats.length)];
    var imgURL = chrome.extension.getURL(chosen);
    for (var i = 0; i < rmcounter; i++) {
        var img = document.createElement("IMG");
        img.src = imgURL;
        annoyingdiv.appendChild(img);

        img.addEventListener("click", function() {
            img.style.visibility = 'hidden';
            rmcounter++;
            createCat();
        });
    }

}

createCat();
