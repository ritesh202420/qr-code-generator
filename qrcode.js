let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    let text = qrText.value.trim();
    if (!text) {
        alert("Please enter text or a URL for the QR code.");
        return;
    }
    let size = "150x150";
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${encodeURIComponent(text)}`;
    imgBox.classList.add("show-img");
}
