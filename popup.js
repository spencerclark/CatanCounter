document.addEventListener('DOMContentLoaded', function () {
  const logDiv = document.getElementById('log');
  const clearButton = document.getElementById('clear');

  // Load logs from storage
  chrome.storage.local.get({ logs: [] }, function (result) {
    const logs = result.logs;
    logDiv.innerHTML = '';
    if (logs.length === 0) {
      logDiv.textContent = 'No logs yet.';
    } else {
      logs.forEach((log) => {
        const logItem = document.createElement('div');
        logItem.className = 'log-item';
        logItem.innerHTML = `<strong>URL:</strong> ${log.url}<br/><strong>Time:</strong> ${log.timeStamp}<br/><strong>Method:</strong> ${log.method}<br/><strong>Status:</strong> ${log.statusCode}`;
        logDiv.appendChild(logItem);
      });
    }
  });

  // Clear logs button
  clearButton.addEventListener('click', function () {
    chrome.storage.local.set({ logs: [] }, function () {
      logDiv.textContent = 'Logs cleared.';
    });
  });
});
