function removeShorts() {
  console.log("Checking for YouTube Shorts...");

  document.querySelectorAll("ytd-rich-section-renderer").forEach((section) => {
    if (section.innerText.includes("Shorts")) {
      section.remove();
    }
  });

  document
    .querySelectorAll("ytd-reel-shelf-renderer")
    .forEach((section) => section.remove());

  document
    .querySelectorAll(
      'ytd-grid-video-renderer a[href*="/shorts/"], a[href*="/shorts/"]'
    )
    .forEach((shorts) => {
      shorts.closest("ytd-grid-video-renderer")?.remove();
    });

  console.log("YouTube Shorts removed.");
}

removeShorts();

const observer = new MutationObserver(() => removeShorts());
observer.observe(document.body, { childList: true, subtree: true });
