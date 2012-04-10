function save_options() {
  var hotkey = document.getElementById("hotkey").value;
  var redmineurl = document.getElementById("redmineurl").value;
  localStorage["hotkey"] = hotkey;
  localStorage["redmineurl"] = redmineurl;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores state to saved value from localStorage.
function restore_options() {
  var hotkey = localStorage["hotkey"];
  var redmineurl = localStorage["redmineurl"];
  if (!hotkey) {
    return;
  }
  if (!redmineurl) {
    return;
  }
  var hotkeyinput = document.getElementById("hotkey");
  var redmineurlinput = document.getElementById("redmineurl");
  hotkeyinput.value = hotkey;
  redmineurlinput.value = redmineurl;
}

document.addEventListener('DOMContentLoaded', function () {
  restore_options();
  document.querySelector('button').addEventListener('click', save_options);
});

