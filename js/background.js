chrome.action.onClicked.addListener((tab) => {
  console.log("Action clicked");
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['js/content.js']
  });
});