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
