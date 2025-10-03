// Trigger popup on iframe click
document.querySelectorAll(".video-thumb").forEach((iframe) => {
  iframe.addEventListener("click", () => {
    const popup = document.getElementById("video-popup");
    const popupIframe = document.getElementById("popup-iframe");
    popupIframe.src = iframe.src;
    popup.classList.remove("hidden");
  });
});

// Close popup
function closePopup() {
  const popup = document.getElementById("video-popup");
  const popupIframe = document.getElementById("popup-iframe");
  popupIframe.src = ""; // stop video
  popup.classList.add("hidden");
}

// Trigger popup on Panter buttion.
