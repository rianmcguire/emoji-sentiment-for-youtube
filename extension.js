var sentiment = require("sentiment");

function getEmoji(score) {
    if (score < -0.2) {
        return "😡";
    } else if (score < -0.1) {
        return "😠";
    } else if (score < 0.1) {
        return "😐";
    } else if (score < 0.2) {
        return "😀";
    } else {
        return "😁";
    }
}

function replaceComments() {
    document.querySelectorAll(".comment-renderer-text-content:not([data-emoji-sentiment])").forEach(function(comment){
        comment.setAttribute("data-emoji-sentiment", "");
        var score = sentiment(comment.innerText).comparative;
        comment.innerText = getEmoji(score);
    });
}
replaceComments();

var observer = new MutationObserver(function(){
    observer.disconnect();
    replaceComments();
    observer.observe(document, {childList: true, subtree: true});
});
observer.observe(document, {childList: true, subtree: true});
