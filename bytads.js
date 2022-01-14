let bytads = (element) => {
    videoPlayer = document.querySelector(".html5-main-video");
    videoPlayer.currentTime = videoPlayer.duration;
    element.click(); // only this will also work!
}

let observer = new MutationObserver((mut, obs) => {
    // Skippable Ads
    adSkipButton = document.querySelector(".ytp-ad-skip-button");
    if (adSkipButton) bytads(adSkipButton);

    // Overlay Ads
    adModule = document.querySelector(".ytp-ad-module");
    if (adModule) adModule.style.display = "none";
})

observer.observe(document, {
    childList: true,
    subtree: true
});