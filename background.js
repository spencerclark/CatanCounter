chrome.webRequest.onCompleted.addListener(
  function(details) {
    if (details.url.includes("boardgamearena.com")) {
      // Log the request details for later display
      chrome.storage.local.get({ logs: [] }, function(result) {
        const logs = result.logs;
        logs.push({
          url: details.url,
          timeStamp: new Date(details.timeStamp).toLocaleTimeString(),
          method: details.method,
          statusCode: details.statusCode
        });
        chrome.storage.local.set({ logs: logs });
      });
    }
  },
  { urls: ["*://*.boardgamearena.com/*"] }
);