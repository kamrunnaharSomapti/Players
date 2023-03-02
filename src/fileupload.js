(function () {
  var form = document.getElementById("form");
  var fileInput = document.getElementById("input");
  var fileListDisplay = document.getElementById("display");

  var fileList = [];
  var displayFileList, sendFile;

  form.addEventListener("submit", function (evnt) {
    evnt.preventDefault();
    // fileList.forEach(function (file) {
    //   sendFile(file);
    // });
  });

  fileInput.addEventListener("change", function (evnt) {
    fileList = [];
    for (var i = 0; i < fileInput.files.length; i++) {
      fileList.push(fileInput.files[i]);
    }
    displayFileList();
  });

  displayFileList = function () {
    fileListDisplay.innerHTML = "";
    fileList.forEach(function (file, index) {
      var fileDisplayEl = document.createElement("p");
      fileDisplayEl.innerHTML = index + 1 + ": " + file.name;
      fileListDisplay.appendChild(fileDisplayEl);
    });
  };
})();
