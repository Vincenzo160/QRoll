// Get Version - id version
fetch('https://vincenzo160.github.io/QRoll/version.json?nocache=' + (new Date()).getTime())
.then(response => response.json())
.then(data => {
  var version = data.version;
  document.getElementById('version').innerHTML = version;
});