var toggle = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;

  if (toggle) {
    chrome.browserAction.setIcon({path: "on.jpg", tabId: tab.id});
    chrome.tabs.executeScript(tab.id, {file:"SCRIPT.user.js"});
  } else {
    chrome.browserAction.setIcon({path; "off.jpg", tabId: tab.id});
    chrome.tabs.executeScript(tab.id, {code:"alert()"});
  }
});
