function CAT() {
    var imgURL = chrome.extension.getURL("pusheen.png");
    document.getElementByTagName('body')[0].prepend('<img id="CATimg" />');

    var $catImg = document.getElementById('CATimg');

    if (document.contains($catImg)) {
        $catImg.src = imgURL;
        $catImg.style.position = 'fixed';
        $catImg.style.width = 25;
        $catImg.style.height = 'auto';
        $catImg.style.display = 'none';
        $catImg.style.zIndex = 2147483647;
        $catImg.style.border = '0px';
        $catImg.style.padding = '0px';
        $catImg.style.bottom = '20px';
        $catImg.style.right = '20px';
        $catImg.style.margin = '0px 0px 0px 0px';
    }
}
CAT();
