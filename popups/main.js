const follow = document.getElementById('follow');
const bookmark = document.getElementById('bookmark');

follow.addEventListener("change", () => {
    chrome.storage.sync.set({'follow':follow.checked});
})
bookmark.addEventListener("change", () => {
    chrome.storage.sync.set({'follow':follow.checked});
})