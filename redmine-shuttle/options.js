function save_options() {
  var redmineurl = document.getElementById("redmineurl").value;
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
  var redmineurl = localStorage["redmineurl"];
  if (!redmineurl) {
    return;
  }
  var redmineurlinput = document.getElementById("redmineurl");
  redmineurlinput.value = redmineurl;
}

document.addEventListener('DOMContentLoaded', function () {
  restore_options();
  document.querySelector('button').addEventListener('click', save_options);
});

