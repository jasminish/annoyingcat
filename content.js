var cats = [];
for (var i = 1; i <= 25; i++) {
    cats.push('catimages/cat' + i + '.png');
}


var div = document.createElement("DIV");
div.id = "annoyingcat";
var annoyingdiv = div;
document.body.appendChild(annoyingdiv);

var rmcounter = 1;

function createCat() {
    for (var i = 0; i < rmcounter; i++) {
        var chosen = cats[Math.floor(Math.random() * cats.length)];
        var imgURL = chrome.extension.getURL(chosen);

        var top = Math.floor(Math.random() * 100);
        var left = Math.floor(Math.random() * 100);

        var img = document.createElement("IMG");
        img.src = imgURL;
        img.style.top = top + '%';
        img.style.left = left + '%';
        annoyingdiv.appendChild(img);

        img.addEventListener("click", function() {
            img.style.visibility = 'hidden';
            rmcounter++;
            createCat();
        });
    }

}

createCat();
