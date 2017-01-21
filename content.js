var cats = ['cat1.png', 'cat2.png','cat3.png','cat4.png','cat5.png','cat6.png']
var chosen = cats[Math.floor(Math.random() * cats.length)];


var imgURL = chrome.extension.getURL(chosen);

var annoyingdiv = document.getElementById("annoyingcat");
var rmcounter = 1;

function createCat() {
    if (annoyingdiv == null) {
        var div = document.createElement("DIV");
        div.id = "annoyingcat";

        var img = document.createElement("IMG");
        var imgURL = chrome.extension.getURL('pusheen.png');
        img.src = imgURL;
        div.appendChild(img);
        document.body.appendChild(div);

    } else {
        for (var i = 0; i < rmcounter; i++) {
            var img = document.createElement("IMG");
            var imgURL = chrome.extension.getURL('pusheen.png');
            img.src = imgURL;
            annoyingdiv.appendChild(img);

            img.addEventListener("click", function() {
                img.style.visibility = 'hidden';
                rmcounter *= 2;
                createCat();
            });
        }
    }
}

createCat();
