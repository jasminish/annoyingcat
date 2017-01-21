var toggle = document.getElementById("onOff").checked;

console.log(toggle);

if (toggle) {
    chrome.tabs.executeScript(tab.id, {file:"content.js"});
} else if (!toggle) {
    chrome.tabs.executeScript(tab.id, {file:"remove.js"});
}
