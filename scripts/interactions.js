// No Id mode
function noid() {
    document.getElementById('QRForm').reset();
    var code = document.getElementById('code')
    var txtplc = document.getElementById('idnone')
    var noidmode = document.getElementById('noidmode')
    code.value = "999";
    code.disabled = true;
    code.style.display = "none";
    noidmode.style.display = "none";
    txtplc.style.display = "block";
    document.getElementById("yt-embed").style.display = "none";
    document.getElementById("yt-embed").remove;
    document.getElementById("stop").style.display = "block";
    toggleimg()
}

// Reference Image Toggle 
function toggleimg() {
    var qrimg = document.getElementById("qrimg");
    var offtxt = document.getElementById("switchoff");
    var ontxt = document.getElementById("switchon");
    if (qrimg.style.display === "none") {
    ontxt.style.display = "none";
    offtxt.style.display = "block";
    qrimg.style.display = "block";
    } else {
    ontxt.style.display = "block";
    offtxt.style.display = "none";
    qrimg.style.display = "none";
    }
}

// Disable Button
function disablebtn() {
    const button = document.getElementById('submit-button');
    button.disabled = true;
    button.value = 'Sending...';
    button.className = 'btn-disabled';
}