function search(query, callback) {
  var url = '';
  var redmineurl = getUrl();
  if (/^#/.test(query)) {
    query = query.substring('#'.length);
    url = redmineurl + "/issues/" + query;
  } else if (/^project:/.test(query)) {
    url = redmineurl + "/projects/" + query.substring('project:'.length) + '"';
  } else {
    query = '"' + query + '"';
    url = redmineurl + "/search?q=" + query;
  }
  navigate(url);
}

function getUrl() {
  var redmineurl = localStorage["redmineurl"];
  if (!redmineurl) {
    console.log('Please set a Redmine URL in Redmine Shuttle');
    return;
  }
  return redmineurl;
}

function navigate(url) {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.update(tab.id, {url: url});
  });
}

chrome.omnibox.onInputEntered.addListener(function(text) {
  search(text);
});
