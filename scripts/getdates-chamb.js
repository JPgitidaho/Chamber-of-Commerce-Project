function getCurrentYear() {
  return new Date().getFullYear();
}

function getLastModified() {
  return document.lastModified;
}

function updateLastModifiedText() {
  const lastModified = getLastModified();
  document.getElementById("last-modified").innerHTML = "Last modified: " + lastModified;
}

document.addEventListener("DOMContentLoaded", function () {
  const year = getCurrentYear();
  updateLastModifiedText();
  document.getElementById("copyright-info").innerHTML = "&copy; " + year + " Juanita P. Aguilera - Rancagua, Chile.";
});
