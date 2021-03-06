var toggle = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;

  if (toggle) {
    chrome.browserAction.setIcon({path: "/icons/onfixed.png", tabId: tab.id});
    chrome.browserAction.setTitle({title: "Oh no! Cats everywhere!"});
    chrome.tabs.executeScript(tab.id, {file:"content.js"});
  } else {
    chrome.browserAction.setIcon({path: "/icons/offfixed.png", tabId: tab.id});
    chrome.browserAction.setTitle({title: "No cats here!"});
    chrome.tabs.executeScript(tab.id, {file:"remove.js"});
  }
});
