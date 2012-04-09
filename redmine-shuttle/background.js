function search(query, callback) {
  if (/^#/.test(query)) {
    query = query.substring('#'.length);
    url = "http://vvv.cantemo.com/issues/" + query;
  } else if (/^project:/.test(query)) {
    url = "http://vvv.cantemo.com/projects/" + query.substring('project:'.length) + '"';
  } else {
    query = '"' + query + '"';
    url = "http://vvv.cantemo.com/search?q=" + query;
  }
  navigate(url);
}

function getUrl(path, line) {
  console.log('getURL');
  var url = "http://vvv.cantemo.com/" + path;
  if (line)
    url += "&l=" + line;
  return url;
}

function navigate(url) {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.update(tab.id, {url: url});
  });
}

chrome.omnibox.onInputEntered.addListener(function(text) {
  search(text);
});
